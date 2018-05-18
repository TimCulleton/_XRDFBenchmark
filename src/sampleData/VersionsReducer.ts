// ///<amd-module name="DS/GEODataExplorerControls/Redux/Reducers/VersionsReducer"/>
//
// /**
//  * Created by hq9 on 8/9/2017
//  */
//
// import * as Types from "../GDMTypes";
// import * as ActionEvents from "../Actions/ActionEvents";
// import * as ActionTypes from "../Actions/ActionTypes";
// import {ReducerHelperBase} from "./ReducerHelperBase";
//
// import Redux = require("DS/Redux/Redux");
// import UWA = require("UWA/Core");
// //import {stat} from "fs";
//
// const INITIAL_VERSIONS_STATE = <Types.IStateVersions>{};
//
// export function versionsReducer(state: Types.IStateVersions = INITIAL_VERSIONS_STATE, action: Redux.Action): Types.IStateVersions {
//
//     switch (action.type) {
//
//         case ActionEvents.RECEIVING_SITES:
//             return VersionsReducerHelper.processReceivingSites(state, <ActionTypes.TReceivedSites>action);
//
//         case ActionEvents.RECEIVING_ALL_SITE_ITEMS_OF_TYPE:
//         case ActionEvents.RECEIVING_SITE_ITEMS:
//             return VersionsReducerHelper.processReceivedSiteItems(state, <ActionTypes.IReceivedSiteItems>action);
//
//         case ActionEvents.ADD_ITEM_VERSION:
//             return VersionsReducerHelper.processItemVersion(state, <ActionTypes.IAddedVersion>action);
//
//         case ActionEvents.ADD_REAL_SITE_ITEM:
//             return VersionsReducerHelper.processRealSiteItemAdded(state, <ActionTypes.IAddSiteItem>action);
//
//         default:
//             return state;
//     }
// }
//
// export class VersionsReducerHelper extends ReducerHelperBase {
//
//     /**
//      * Clone the current state
//      * @param {IStateVersions} state
//      * @returns {IStateVersions}
//      */
//     public static cloneStateVersions(state: Types.IStateVersions): Types.IStateVersions {
//         return UWA.clone(state, true);
//     }
//
//     /**
//      * Process a received site items event, creating a new versions state updating/adding new versions
//      * to the state
//      * @param {IStateVersions} state
//      * @param {IReceivedSiteItems} action
//      * @returns {IStateVersions}
//      */
//     public static processReceivedSiteItems(state: Types.IStateVersions, action: ActionTypes.IReceivedSiteItems): Types.IStateVersions {
//         let newState = VersionsReducerHelper.cloneStateVersions(state);
//
//         action.versions.forEach(version => {
//             newState[version.uri] = UWA.clone(version);
//         });
//
//         return newState;
//     }
//
//     public static processItemVersion(state: Types.IStateVersions, action: ActionTypes.IAddedVersion) {
//         let newState = VersionsReducerHelper.cloneStateVersions(state);
//         newState[action.version.uri] = action.version;
//
//         return newState;
//     }
//
//     public static processRealSiteItemAdded(state: Types.IStateVersions, action: ActionTypes.IAddSiteItem): Types.IStateVersions {
//         let clone = VersionsReducerHelper.cloneStateVersions(state);
//         clone[action.version.uri] = UWA.clone(action.version);
//         return clone;
//     }
//
//     /**
//      *
//      * @param {IStateVersions} state
//      * @param {TReceivedSites} action
//      * @return {IStateVersions}
//      */
//     public static processReceivingSites(state: Types.IStateVersions, action: ActionTypes.TReceivedSites): Types.IStateVersions {
//         if(action.versions) {
//             let clone = VersionsReducerHelper.cloneStateVersions(state);
//
//             action.versions.forEach(version => {
//                 clone[version.uri] = UWA.clone(version);
//             });
//             return clone;
//         } else {
//             return state;
//         }
//     }
// }
