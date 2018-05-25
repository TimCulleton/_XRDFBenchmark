import * as TypeScriptParser from "./typescriptParser";
import Voca = require("voca");

export function generateActionEvents(state: TypeScriptParser.ISimpleNode): string {

    let buffer = new ActionEventBuffer();
    let stateProperties: IStateProperty[] = [];

    for(let property of state.members) {
        let propertyName = Voca.snakeCase(property.name).toUpperCase();

        let setPropName = `SET_${propertyName}`;
        let clearPropName = `CLEAR_${propertyName}`;

        buffer.addExport(setPropName);
        buffer.addExport(clearPropName);

        let stateProperty: IStateProperty = Object.assign({setEvent: setPropName, clearEvent: clearPropName}, property);

        if(property.collection === TypeScriptParser.CollectionType.Array || property.collection === TypeScriptParser.CollectionType.Object) {
            const addPropCollection = `ADD_${propertyName}_COLLECTION`;
            const removePropCollection = `REMOVE_${propertyName}_COLLECTION`;

            buffer.addExport(addPropCollection);
            buffer.addExport(removePropCollection);

            stateProperty.addCollectionEvent = addPropCollection;
            stateProperty.removeCollectionEvent = removePropCollection;
        }
        buffer.addBlank();

        stateProperties.push(stateProperty);
    }

    return buffer.toString();
}

export function generateActionTypes(): string {

    let buffer = new BasicBuffer();

    buffer
        .add(`import * as StateTypes from '../filename';`)
        .add(`import Redux = require('DS/Redux/Redux');`)
        .addBlank();

    buffer
        .add(`export interface IBasicAction<T> extends Redux.Action {`)
            .add(`item?: T;`, 1)
            .add(`collection?: T[];`, 1)
        .add(`}`);

    return buffer.toString();
}

export function generateActionBase(): string {
    let buffer = new BasicBuffer();

     buffer
        .add(`import * ActionTypes from './ActionTypes';`)
        .addBlank()
        .add(`export class ActionBase {`)
            .addBlank()
            .add(`export function createBasicAction<T>(data: {item?: T, collection?: T[]}, event: string): ActionTypes.IBasicAction<T> {`, 1)
                .add(`return {`, 2)
                    .add(`item: data.item,`, 3)
                    .add(`collection: data.collection`, 3)
                .add(`}`, 2)
            .add(`}`, 1)
        .add(`}`);

     return buffer.toString();
}

interface IStateProperty extends TypeScriptParser.ISimpleProperty {
    setEvent: string;
    clearEvent: string;

    addCollectionEvent?: string;
    removeCollectionEvent?: string;
}


class BasicBuffer {
    buffer: string[];
    static readonly TAB_SPACE = 4;

    constructor() {
        this.buffer = [];
    }

    public add(msg: string, indent = 0): this {
        this.buffer.push(Voca.padLeft(msg, BasicBuffer.TAB_SPACE * indent));
        return this;
    }

    public addBlank(): this {
        this.buffer.push('');
        return this;
    }

    public toString(): string {
        return this.buffer.join("\n");
    }
}

class ActionEventBuffer extends BasicBuffer {

    constructor() {
        super();
        this.addExport(`SET_STATE`)
            .addExport(`CLEAR_STATE`)
            .addBlank();
    }

    public addExport(prop: string): this {
        this.buffer.push(`export const ${prop} = '${prop}';`);
        return this;
    }
}