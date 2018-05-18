// ///<amd-module name="DS/GEODataExplorerControls/Redux/Actions/SiteItemActions"/>
//
// /**
//  * Created by hq9 on 8/9/2017
//  */
//
//
// import {ActionBase} from "./ActionBase";
// import {ItemVersionActions} from "./ItemVersionActions";
// import * as ActionEvents from "./ActionEvents";
// import * as ActionTypes from "./ActionTypes";
// import * as Types from "../GDMTypes";
// import * as IDataSourceTypes from "../../DataSource/IDataSource";
// import * as ItemTypes from "../../UIData/ObjectTypes";
//
// import UWA_UTILS = require("UWA/Utils");
// import * as AsyncStates from "../../UIData/AsyncState"
//
// import Redux = require("DS/Redux/Redux");
// import Promise = require("UWA/Promise");
//
// import NLS = require("i18n!DS/GEODataExplorerControls/assets/nls/GEODEControls");
// import {IGetAllSiteItemsData} from "../../DataSource/IDataSource";
//
// export class SiteItemActions extends ActionBase {
//
//     /**
//      * @Async
//      * @param {ISite} site
//      * @return {AsyncAction<UWA.Promise<IGetSiteItemsData>>}
//      */
//     public getSiteItemActionV2(site: Types.ISite): ActionTypes.AsyncAction<Promise<IDataSourceTypes.IGetSiteItemsData>> {
//         return ((dispatch, getState) => {
//             dispatch(this.requestSiteItemsAction(site.uri));
//
//             return this.getDataSource().getItemsForSite(site).then(data => {
//                 dispatch(this.receiveSiteItemsAction(
//                     site.uri,
//                     data.siteItems,
//                     data.versions,
//                     data.users,
//                     data.userPermissions
//                 ));
//             })
//         });
//     }
//
//
//     public getAllItemsOfType(itemType: ItemTypes.tItemType): ActionTypes.AsyncAction<Promise<IGetAllSiteItemsData<Types.ISiteContentItem>>> {
//         return (dispatch: Redux.Dispatch<Types.IGDMState>) => {
//             //Fire off the initial event to begin the async process
//             dispatch(this.requestAllSiteItemsOfTypeAction());
//
//             return this.getDataSource().getSitesAndModelsOfType(itemType).then(returnedData => {
//                 dispatch(this.receiveAllSiteItemsOfTypeAction(returnedData))
//             });
//         }
//     }
//
//     public getAllItemsOfTypeFromSites(sites: Types.ISite[], itemType: ItemTypes.tItemType): ActionTypes.AsyncAction<Promise<IGetAllSiteItemsData<Types.ISiteContentItem>>> {
//         return (dispatch: Redux.Dispatch<Types.IGDMState>) => {
//             //Fire off the initial event to begin the async process
//             dispatch(this.requestAllSiteItemsOfTypeAction());
//
//             return this.getDataSource().getAllOfModelType(sites, itemType).then(returnedData => {
//                 dispatch(this.receiveAllSiteItemsOfTypeAction(returnedData))
//             });
//         }
//     }
//
//     public lockSiteItemActionV2(siteItem: Types.ISiteContentItem) {
//
//         return (dispatch: Redux.Dispatch<Types.IGDMState>) => {
//             //Fire off the initial event to begin the async process
//             dispatch(this.lockingSiteItemAction(siteItem.uri));
//
//             this.getDataSource().lockItem(siteItem).then(lockOwner => {
//                 dispatch(this.lockedSiteItemAction(siteItem, lockOwner))
//             });
//         }
//     }
//
//     public unlockSiteItemActionV2(siteItem: Types.ISiteContentItem) {
//         return (dispatch: Redux.Dispatch<Types.IGDMState>) => {
//
//             dispatch(this.unlockingSiteItemAction(siteItem));
//
//             return this.getDataSource().unlockItem(siteItem).then(lockedUser => {
//                 dispatch(this.unlockedSiteItemAction(siteItem))
//             });
//         }
//     }
//
//     /**
//      *
//      * @param {string} siteUri
//      * @returns {IRequestingSiteItems}
//      */
//     public requestSiteItemsAction(siteUri: string): ActionTypes.IRequestingSiteItems {
//         return {
//             type: ActionEvents.REQUESTING_SITE_ITEMS,
//             siteUri: siteUri
//         }
//     }
//
//     /**
//      *
//      * @param {string} siteUri
//      * @param {ISiteContentItem[]} siteItems
//      * @param {IVersion[]} versions
//      * @param {IUser[]} users
//      * @param {IItemUser[]} userPermissions
//      * @returns {IReceivedSiteItems}
//      */
//     public receiveSiteItemsAction(siteUri: string, siteItems: Types.ISiteContentItem[], versions: Types.IVersion[], users: Types.IUser[], userPermissions: Types.IItemUser[]): ActionTypes.IReceivedSiteItems {
//         return {
//             type: ActionEvents.RECEIVING_SITE_ITEMS,
//             siteUri: siteUri,
//             siteItems: siteItems,
//             versions: versions,
//             users: users,
//             itemUsers: userPermissions
//         }
//     }
//
//     public requestAllSiteItemsOfTypeAction() {
//         return {
//             type: ActionEvents.REQUESTING_ALL_SITE_ITEMS_OF_TYPE
//         }
//     }
//
//     public receiveAllSiteItemsOfTypeAction(siteAndItemData: IGetAllSiteItemsData<Types.ISiteContentItem>) {
//         return {
//             type: ActionEvents.RECEIVING_ALL_SITE_ITEMS_OF_TYPE,
//             items: siteAndItemData.items,
//             siteItems: siteAndItemData.siteItems,
//             versions: siteAndItemData.versions,
//             users: siteAndItemData.users,
//             itemUsers: siteAndItemData.itemUsers
//         }
//     }
//
//     /**
//      *
//      * @param {string} siteItemUri
//      * @returns {ILockingSiteItem}
//      */
//     public lockingSiteItemAction(siteItemUri: string): ActionTypes.ILockingSiteItem {
//         return {
//             type: ActionEvents.LOCKING_SITE_ITEM,
//             siteItemUri: siteItemUri
//         }
//     }
//
//     /**
//      *
//      * @param {ISiteItem} siteItem
//      * @param {IUser} lockOwner
//      * @returns {ILockedSiteItem}
//      */
//     public lockedSiteItemAction(siteItem: Types.ISiteContentItem, lockOwner: Types.IUser): ActionTypes.ILockedSiteItem {
//         return {
//             type: ActionEvents.LOCKED_SITE_ITEM,
//             siteItem: siteItem,
//             lockOwner: lockOwner
//         }
//     }
//
//     /**
//      *
//      * @param {ISiteContentItem} siteItem
//      * @returns {IUnlockingSiteItem}
//      */
//     public unlockingSiteItemAction(siteItem: Types.ISiteContentItem): ActionTypes.IUnlockingSiteItem {
//         return {
//             type: ActionEvents.UNLOCKING_SITE_ITEM,
//             siteItem: siteItem
//         }
//     }
//
//     /**
//      *
//      * @param {ISiteContentItem} siteItem
//      * @returns {IUnlockedSiteItem}
//      */
//     public unlockedSiteItemAction(siteItem: Types.ISiteContentItem): ActionTypes.IUnlockedSiteItem {
//         return {
//             type: ActionEvents.UNLOCKED_SITE_ITEM,
//             siteItem: siteItem
//         }
//     }
//
//     public publishSiteItemAction(siteItem: Types.ISiteContentItem) {
//         return (dispatch: Redux.Dispatch<Types.IGDMState>) => {
//
//             dispatch(this.publishingSiteItemAction(siteItem));
//
//             return this.getDataSource().publishItem(siteItem).then(version => {
//                 dispatch(ItemVersionActions.addItemVersion(version));
//                 dispatch(SiteItemActions.publishedSiteItemAction(siteItem, version));
//             });
//         }
//     }
//
//     public publishingSiteItemAction(siteItem: Types.ISiteContentItem) {
//         return {
//             type: ActionEvents.PUBLISHING_SITE_ITEM,
//             siteItem: siteItem
//         }
//     }
//
//     public static publishedSiteItemAction(siteItem: Types.ISiteContentItem, version: Types.IVersion) {
//         return {
//             type: ActionEvents.PUBLISHED_SITE_ITEM,
//             siteItem: siteItem,
//             version: version
//         }
//     }
//
//     // Following the async pattern is a bit overkill for this...
//     public updateSiteBoreholes(site: Types.ISite) {
//         return (dispatch: Redux.Dispatch<Types.IGDMState>) => {
//             dispatch(this.updatingSiteBoreholes(site));
//
//             return this.getDataSource().updateSiteBoreholes(site).then((item: Types.ISiteContentItem) => {
//                 dispatch(this.updatedSiteBoreholes(item, site));
//             });
//         }
//     }
//
//     public updatingSiteBoreholes(site: Types.ISite) {
//         return {
//             type: ActionEvents.UPDATING_SITE_BOREHOLES,
//             site
//         }
//     }
//
//     public updatedSiteBoreholes(siteItem: Types.ISiteContentItem, site: Types.ISite): ActionTypes.IUpdatedSiteBoreholes {
//         return {
//             type: ActionEvents.UPDATED_SITE_BOREHOLES,
//             site,
//             siteItem
//         }
//     }
//
//     // ----- Item Creation ----- //
//
//     public createGeologicalModelAction(site: Types.ISite, siteItemData: Types.ISiteContentItem): ActionTypes.AsyncAction<Promise<IDataSourceTypes.TCreatedSiteItemData>> {
//         return ((dispatch, getState) => {
//
//             siteItemData.uri = UWA_UTILS.getUniqueId(`fake`);
//             siteItemData.asyncState = AsyncStates.CREATING;
//
//             let dummySiteItemData = this._createDummySiteItemData(siteItemData);
//             dispatch(SiteItemActions.addSiteItem(site, dummySiteItemData, ActionEvents.ADD_DUMMY_SITE_ITEM, siteItemData.uri));
//
//             return this.getDataSource().createGeologicalModel(site, siteItemData).then((createdItemData) => {
//                 dispatch(SiteItemActions.addSiteItem(site, createdItemData, ActionEvents.ADD_REAL_SITE_ITEM, siteItemData.uri));
//             }, (error)=> {
//
//                 siteItemData.asyncState = AsyncStates.ERROR;
//                 dispatch(SiteItemActions.addSiteItem(site, dummySiteItemData, ActionEvents.ADD_DUMMY_SITE_ITEM, siteItemData.uri));
//
//                 console.error(error);
//                 this.notifyFailedToCreateEnity(NLS.geologicalModel, siteItemData.name);
//             });
//         });
//     }
//
//     /**
//      *
//      * @param {ISite} site
//      * @param {ICreatedSiteItemData} createdSiteItemData
//      * @param {string} eventId
//      * @param {string} fakeUri
//      * @returns {IAddSiteItem}
//      */
//     public static addSiteItem(site: Types.ISite, createdSiteItemData: IDataSourceTypes.TCreatedSiteItemData, eventId: string, fakeUri?: string): ActionTypes.IAddSiteItem {
//         return {
//             type: eventId,
//             site: site,
//             siteItem: createdSiteItemData.item,
//             fakeUri: fakeUri,
//
//             user: createdSiteItemData.user,
//             userPermission: createdSiteItemData.userPermission,
//             version: createdSiteItemData.version
//         }
//     }
//
//     /**
//      * @param {ISite[]} sites
//      * @returns {IReceivedSites}
//      */
//     public static siteItemCreatedAction(siteItem: Types.ISiteContentItem): ActionTypes.IReceivedSiteItem {
//         return {
//             type: ActionEvents.NEW_SITE_ITEM_CREATED,
//             siteItem: siteItem
//         }
//     }
//
//     private _createDummySiteItemData(model: Types.ISiteContentItem): IDataSourceTypes.TCreatedSiteItemData {
//         return {
//             item: model,
//             version: {
//                 uri: "fake",
//                 createdBy: "fake",
//                 dateCreated: "fake",
//                 state: ""
//             },
//             user: {
//                 uri: "fake"
//             },
//             userPermission: {
//                 userUri: "fake",
//                 itemUri: "fake",
//                 itemCollectionName: "fake",
//                 permission: "fake",
//                 sharedBy: ""
//             }
//         }
//     }
//
//     public removeSiteContentItems(items: Types.ISiteContentItem[]): ActionTypes.TBasicSiteItemsCommand {
//         return {
//             type: ActionEvents.REMOVE_SITE_ITEMS,
//             items: items
//
//         }
//     }
//
//     public addSiteContentItems(items: Types.ISiteContentItem[]): ActionTypes.TBasicSiteItemsCommand {
//         return {
//             type: ActionEvents.ADD_SITE_ITEMS,
//             items: items
//         }
//     }
//
//     public userAddedToSiteItem(userPermission: Types.IItemUser, user: Types.IUser): ActionTypes.IUserPermissionChanged {
//         return {
//             type: ActionEvents.USER_ADDED_TO_SITE_ITEM,
//             userPermission: userPermission,
//             user: user
//         }
//     }
//
//     public userRemovedFromSiteItem(userPermission: Types.IItemUser, user: Types.IUser): ActionTypes.IUserPermissionChanged {
//         return {
//             type: ActionEvents.USER_REMOVED_FROM_SITE_ITEM,
//             userPermission: userPermission,
//             user: user
//         }
//     }
//
// }
