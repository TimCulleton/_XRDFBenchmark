import * as ts from "typescript";
import fs = require("fs");
import path = require("path");

export function parseTSFile(filePath?: string) {
    filePath = filePath || path.resolve("D:\\Projects\\git\\_XRDFBenchmark\\src\\sampleData\\GDMTypes.ts");
    let sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2015, true);
    let data = {interfaces: {}, types: {}, importModules: {}, importedTypes: {}};
    printAllChildren(sourceFile, data);
    return data;
}

//TODO -- Build interface type extractor
//Extractor will pluck all interfaces, types and imports from a given TS file.


///https://ts-ast-viewer.com/
function printAllChildren(node: ts.Node, data: INodeProcessorData = {interfaces: {}, types: {}, importModules: {}, importedTypes: {}}) {


    if(ts.isInterfaceDeclaration(node)) {
        data.interfaces[node.name.getText()] = node;

    } else if(ts.isTypeAliasDeclaration(node)) {
        data.types[node.name.getText()] = node;

    } else if(ts.isImportDeclaration(node)) {
        data.importModules[node.moduleSpecifier.getText()] = node;

        //Add all the import types to objects
        node.importClause.namedBindings.forEachChild(importNode => {
            if(ts.isIdentifier(importNode)) {
                data.importedTypes[importNode.getText()] = importNode;

            } else if ( ts.isImportSpecifier(importNode)) {
                data.importedTypes[importNode.name.text] = importNode;
            }
        })
    }

    node.forEachChild(node => {
        printAllChildren(node, data);
    });
}

export function getStateNode(nodeData: INodeProcessorData, state: string): ISimpleNode{
    let tsNode = nodeData.interfaces[state];

    let stateData: ISimpleNode = {
        identifier: "",
        members: []
    };
    if(tsNode) {
        stateData.identifier = state;

        tsNode.members.forEach(propertyNode => {
            if(ts.isPropertySignature(propertyNode)) {
                let propName = propertyNode.name.getText();

                //property types
                let propertyData: ISimpleProperty;

                //Reference
                if(ts.isTypeReferenceNode(propertyNode.type)) {
                    let referenceName = propertyNode.type.typeName.getText();

                    let typeNode = nodeData.interfaces[referenceName];
                    //test if object collection type
                    if(typeNode && typeNode.members.length === 1) {

                        //Object
                        if(ts.isIndexSignatureDeclaration(typeNode.members[0])) {

                            propertyData = {
                                name: propName,
                                type: referenceName,
                                collection: CollectionType.Object,
                                importType: false,
                            }
                        }
                    } else if (typeNode) {
                        propertyData = {
                            name: propName,
                            type: referenceName,
                            collection: CollectionType.Single,
                            importType: false,
                        }
                    }
                //primitives
                } else if(propertyNode.type.kind === ts.SyntaxKind.StringKeyword || propertyNode.type.kind === ts.SyntaxKind.NumberKeyword || propertyNode.type.kind === ts.SyntaxKind.BooleanKeyword) {
                    propertyData = {
                        name :propName,
                        type :propertyNode.type.getText(),
                        collection :CollectionType.Single,
                        importType :false,
                    }
                //Array types
                } else if(ts.isArrayTypeNode(propertyNode.type)) {
                    propertyData = {
                        name: propName,
                        type: propertyNode.type.getText(),
                        collection: CollectionType.Array,
                        importType: false,
                    }
                }

                if(propertyData) {
                    stateData.members.push(propertyData);
                }
            }
        });
    }

    return stateData;
}

interface INodeProcessorData {
    interfaces: {[key: string]: ts.InterfaceDeclaration};
    types: {[key: string]: ts.TypeAliasDeclaration};
    importModules: {[key: string]: ts.ImportDeclaration};
    importedTypes: {[key: string]: ts.Node};
}


export interface ISimpleNode {
    identifier: string;
    members: ISimpleProperty[];
}

export interface ISimpleProperty {
    name: string;
    type: string;
    collection: CollectionType;
    importType: boolean;
    importParent?: string;
}

export enum CollectionType {
    Single = "single",
    Array = "array",
    Object = "object"
}