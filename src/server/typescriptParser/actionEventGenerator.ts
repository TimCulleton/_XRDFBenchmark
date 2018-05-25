import * as TypeScriptParser from "./typescriptParser";
import Voca = require("voca");

export function generateActionEvents(state: TypeScriptParser.ISimpleNode): string {

    let buffer = new ActionEventBuffer();


    for(let property of state.members) {
        let propertyName = Voca.snakeCase(property.name).toUpperCase();


        let setPropName = `SET_${propertyName}`;
        let clearPropName = `CLEAR_${propertyName}`;

        buffer.addExport(setPropName);
        buffer.addExport(clearPropName);

        if(property.collection === TypeScriptParser.CollectionType.Array || property.collection === TypeScriptParser.CollectionType.Object) {
            const addPropCollection = `ADD_${propertyName}_COLLECTION`;
            const removePropCollection = `REMOVE_${propertyName}_COLLECTION`;

            buffer.addExport(addPropCollection);
            buffer.addExport(removePropCollection);
        }
        buffer.addBlank();
    }

    return buffer.toString();
}

class ActionEventBuffer {
    buffer: string[];

    constructor() {
        this.buffer = [];

        this.addExport(`SET_STATE`)
            .addExport(`CLEAR_STATE`)
            .addBlank();
    }

    public addExport(prop: string): this {
        this.buffer.push(`export const ${prop} = '${prop}';`);
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