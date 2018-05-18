// ///<amd-module name="DS/GEODataExplorerControls/Redux/Actions/ActionBase"/>
//
// /**
//  * Created by hq9 on 8/8/2017
//  */
//
// import {IDataSource} from "../../DataSource/IDataSource";
// import NotifyManager = require("DS/GEOCommonClient/Managers/NotifyManager");
// import NLS = require("i18n!DS/GEODataExplorerControls/assets/nls/GEODEControls");
//
// export abstract class ActionBase {
//
//     protected _dataSource: IDataSource;
//
//     constructor(dataSource: IDataSource) {
//         this._dataSource = dataSource;
//     }
//
//     public getDataSource(): IDataSource {
//         return this._dataSource;
//     }
//
//     public notifySuccess(message: string) {
//         NotifyManager.success(message);
//     }
//
//     public notifyWarning(message: string) {
//         NotifyManager.warning(message);
//     }
//
//     public notifyError(message: string) {
//         NotifyManager.error(message);
//     }
//
//     /**
//      *
//      * @param {string} type
//      * @param {string} name
//      */
//     public notifyFailedToCreateEnity(type: string, name: string) {
//         this.notifyError(NLS.replace(NLS.error_failed_to_create_entity, {type: type, name: name}));
//     }
// }
