import * as ts from "typescript";
import fs = require("fs");
import path = require("path");

export function parseTSFile(filePath?: string) {
    filePath = filePath || path.resolve("H:\\Dev\\_XRDFBenchmark\\src\\sampleData\\GDMTypes.ts");
    let sourceFile = ts.createSourceFile(filePath, fs.readFileSync(filePath).toString(), ts.ScriptTarget.ES2015, true);
    printAllChildren(sourceFile);
}

//TODO -- Build interface type extractor
//Extractor will pluck all interfaces, types and imports from a given TS file.


///https://ts-ast-viewer.com/
function printAllChildren(node: ts.Node) {
    switch (node.kind) {

        case ts.SyntaxKind.InterfaceDeclaration:
            console.log(`interface Node`);
            let intChildNodes = node.getChildren();
            break;

        case ts.SyntaxKind.TypeAliasDeclaration:
            console.log(`type Node`);
            break;
    }

    node.forEachChild(printAllChildren);
}
