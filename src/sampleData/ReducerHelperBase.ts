// ///<amd-module name="DS/GEODataExplorerControls/Redux/Reducers/ReducerHelperBase"/>
//
// /**
//  * Created by hq9 on 8/9/2017
//  */
//
// import * as Types from "../GDMTypes";
//
// export abstract class ReducerHelperBase {
//
//     /**
//      * Checks to see that a given uri exists in a collection of type IBaseType
//      * @param {string} uri
//      * @param {T[]} collection
//      * @returns {boolean}
//      * @private
//      */
//     protected static _doesUriExistInCollection<T extends Types.IBaseType>(uri: string, collection: T[]): boolean {
//         let contains = false;
//         for(let item of collection) {
//             if(item.uri === uri) {
//                 contains = true;
//                 break;
//             }
//         }
//
//         return contains;
//     }
// }
