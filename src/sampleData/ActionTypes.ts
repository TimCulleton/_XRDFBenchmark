// ///<amd-module name="DS/GEODataExplorerControls/Redux/Actions/ActionTypes"/>
//
// /**
//  * Created by hq9 on 8/8/2017
//  */
//
// import * as Types from "../GDMTypes";
//
// import Redux = require("DS/Redux/Redux");
//
// import * as DataSourceTypes from "../../DataSource/IDataSource";
//
// //############# ASYNC Action
//
// /**
//  * This is provide async 'action' function which can be used by the stores
//  * 'dispatch' async. This type is explicitly defined for use of the GDM
//  */
// export type AsyncAction<R> = Redux.ThunkAction<R, Types.IGDMState>;
//
// //############# Basic Action Types
//
// /**
//  * Generic type that contains information used to populate the state.
//  * Typically this will be used to return a collection of given type with the associated data from it.
//  * IE getting all sites would generate the collection of sites in addition to the: versions, users and user permissions
//  */
// export interface IGetContentItems<ContentType extends Types.IBaseType> extends Redux.Action {
//     contentItems: ContentType[];
//     versions?: Types.IVersion[];
//     users?: Types.IUser[];
//     userPermissions?: Types.IItemUser[];
// }
//
// export interface TReceivedUpdates extends Redux.Action {
//     updateInfos: DataSourceTypes.IUpdateInfo[];
// }
//
// /**
//  * Used when Adding or added new permissions to an item
//  * Used when updating or updated user permissions on an item
//  * Used when removing or removed user permissions on an item
//  */
// export interface IUpdatingUserPermissionsForEntity <T extends Types.IBaseType> extends Redux.Action {
//     item: T;
//     parent?: Types.IBaseType;
//     users: Types.IUser[];
//     userPermissions: Types.IItemUser[];
//     parentPermissions?: Types.IItemUser[];
// }
//
// export interface IAddEntity extends Redux.Action {
//     site: Types.ISite;
//     fakeUri: string; //Dummy uri added before async process completed
//     version: Types.IVersion;
//     user: Types.IUser;
//     userPermission: Types.IItemUser;
// }
//
//
// export type TBasicSitesCommand = IBasicEntityCommands<Types.ISite>;
// export type TBasicSiteItemsCommand = IBasicEntityCommands<Types.ISiteContentItem>;
// export type TBasicVersionCommand = IBasicEntityCommands<Types.IVersion>;
// export type TBasicUserCommand = IBasicEntityCommands<Types.IUser>;
// export interface IBasicItemUserCommand extends Redux.Action {items: Types.IItemUser[]}
// export interface IBasicEntityCommands <T extends Types.IBaseType> extends Redux.Action {
//     items: T[];
// }
//
// //############# Site Actions
//
// /**
//  * Returns a collection of sites with the associated versions, users and permissions
//  */
// export type TReceivedSites = IGetContentItems<Types.ISite>;
//
// export interface IReceivedSites extends Redux.Action {
//     sites: Types.ISite[]
// }
//
// export type TUpdatingUserPermissionsForSite = IUpdatingUserPermissionsForEntity<Types.ISite>;
//
// export interface IAddSite extends IAddEntity {
// }
//
// //############ Site Item Actions
//
// export interface IAddSiteItem extends IAddEntity {
//     siteItem: Types.ISiteContentItem;
// }
//
// export interface IRequestingSiteItems extends Redux.Action {
//     siteUri: string;
// }
//
// export interface IUpdatedSiteBoreholes extends Redux.Action {
//     site: Types.ISite;
//     siteItem: Types.ISiteContentItem;
// }
//
// /**
//  * When a collection of site items has been returned
//  * References must be added to the parent site.
//  * Users will also be returned which need to be added to the users collection.
//  * Versions will be returned
//  */
// export interface IReceivedSiteItems extends IRequestingSiteItems {
//     siteUri: string;
//     siteItems: Types.ISiteContentItem[];
//
//     versions: Types.IVersion[];
//     users: Types.IUser[];
//     itemUsers: Types.IItemUser[];
// }
//
// export interface IReceivedAllSiteItemsOfType extends IRequestingSiteItems {
//     items: Types.ISite[]; /* "items" is the property used in the sites reducer to refer to "sites" */
//     siteItems: Types.ISiteContentItem[];
//
//     versions: Types.IVersion[];
//     users: Types.IUser[];
//     itemUsers: Types.IItemUser[];
// }
//
// export interface IReceivedSiteItem extends Redux.Action {
//     siteItem: Types.ISiteContentItem;
// }
//
// /**
//  * A user has initiated the lock process
//  */
// export interface ILockingSiteItem extends Redux.Action {
//     siteItemUri: string;
// }
//
// /**
//  * Lock process has completed for the item
//  */
// export interface ILockedSiteItem extends Redux.Action {
//     siteItem: Types.ISiteContentItem;
//     lockOwner: Types.IUser
// }
//
// /**
//  * User has initiated the unlock process
//  */
// export interface IUnlockingSiteItem extends Redux.Action {
//     siteItem: Types.ISiteContentItem;
// }
//
// /**
//  * Unlock process has finished for the item
//  */
// export interface IUnlockedSiteItem extends Redux.Action {
//     siteItem: Types.ISiteContentItem;
// }
//
// /**
//  * A user has initiated the publishing process
//  */
// export interface IPublishingSiteItem extends Redux.Action {
//     siteItem: Types.ISiteContentItem;
// }
//
// /**
//  * Publish process has finished for the item
//  */
// export interface IPublishedSiteItem extends Redux.Action {
//     siteItem: Types.ISiteContentItem;
//     version: Types.IVersion;
// }
//
// export interface IAddingVersion extends Redux.Action {
//     version: Types.IVersion;
// }
//
// export interface IAddedVersion extends Redux.Action {
//     version: Types.IVersion;
// }
//
// export type TUpdatingPermissionForSiteItem = IUpdatingUserPermissionsForEntity<Types.ISiteContentItem>;
//
// //############ CRS Actions
//
// export interface IReceivedCRS extends Redux.Action {
//     items: Types.ICRS[];
// }
//
// export interface ICreatedCRS extends Redux.Action {
//     item: Types.ICRS;
// }
//
// export interface IReceivedCRSItem extends Redux.Action {
//     item: Types.ICRS;
//     fakeUri: string;
// }
//
// export interface ICreatedCRSItem extends Redux.Action {
//     item: Types.ICRS;
// }
//
// //############ Selected Site Action
// export interface ISetSelectedSite extends Redux.Action {
//     site: Types.ISite
// }
//
// //############ Selected Site Item Action
// export interface ISetSelectedSiteItem extends Redux.Action {
//     item: Types.ISiteContentItem;
// }
//
// //############ Current User Actions
// export interface ISetCurrentUserAction extends Redux.Action {
//     user: Types.IUser
// }
//
// //############ User Actions
// export interface IAddingUserToItem extends Redux.Action {
//     item: Types.ISiteContentItem,
//     user: Types.IUser,
//     permission: string,
//     cascadeVersions: boolean
// }
//
// export interface IAddingUsersToItem extends Redux.Action {
//     item: Types.ISiteContentItem,
//     users: Types.IUser[],
//     permission: string,
//     cascadeVersions: boolean
// }
//
// export interface IRemovingUserFromItem extends Redux.Action {
//     item: Types.ISiteContentItem;
//     user: Types.IUser;
//     cascadeVersions: boolean;
// }
//
// export interface IChangingUserPermissionForItem extends Redux.Action {
//     item: Types.ISiteContentItem,
//     user: Types.IUser,
//     permission: string,
//     cascadeVersions: boolean
// }
//
//
//
// /**
//  * Async complete action
//  */
// export interface IUserPermissionChanged extends Redux.Action {
//     userPermission: Types.IItemUser;
//     user: Types.IUser;
// }
//
// export interface IUserPermissionsChanged extends Redux.Action {
//     userPermissions: Types.IItemUser[];
//     users: Types.IUser[];
// }
//
// //############ UI Info Panel Actions
// export interface IUISetVisible extends Redux.Action {
//     visible: boolean;
// }
//
// export interface IUIInfoPanelSelectedNav extends Redux.Action {
//     selectedNav: string;
// }
//
// //############ UI Toolbar Actions
// export interface IUIToolbarLayoutChange extends Redux.Action {
//     isTileLayout: boolean;
// }
//
// //############ UI Sites Actions
// export interface IUIItemMenuViewTypeChange extends Redux.Action {
//     currentView: string;
// }
//
// export interface IUIItemsMenuSetVisible extends Redux.Action {
//     visible: boolean;
// }
//
// export interface ISetSelectedCategory extends Redux.Action {
//     selectedCategory: string;
// }
//
// export interface ISetCurrentCategory extends Redux.Action {
//     currentCategory: string;
// }
//
// //############ Categories Actions
// export interface ISetSitesCategory extends Redux.Action {
//     sites: Types.ISite[];
// }
//
// export interface ISetSelectedViewCategory extends Redux.Action {
//     currentCategory: string;
//     selectedView: string;
// }
//
// export interface ISetItemPropertyCategory extends Redux.Action {
//     itemUri: string;
// }
//
// //############ Selected Item Action
// export interface ISetSelectedItem extends Redux.Action {
//     detailViewKey: string;
//     itemUri: string;
// }
//
// export interface IClearItemSelection extends Redux.Action {
//     detailViewKey: string;
// }
//
// export interface ISetSelectedItems extends Redux.Action {
//     detailViewKey: string;
//     items: Types.IBaseType[];
// }
