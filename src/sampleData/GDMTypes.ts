///<amd-module name="DS/GEODataExplorerControls/Redux/GDMTypes"/>

import {importXs} from "../UIData/ObjectTypes";
import * as TestTypes from "./testTypes";
import {choasMonkey, phoenix as zombie} from ".weirdPlaces";


export type tItemType = any;

/**
 * Created by hq9 on 8/8/2017
 */

export interface HelixCore {
    test: TestTypes.Out,
    hax: TestTypes.XX

    inlineType: {testx: string, slummin: boolean}
}

export interface IExtension<T> {
    type: T;
}

export interface HelixExtension extends IExtension<TestTypes.XX> {

}

/**
 * The 'state' object by which the entire GDM Application works on.
 *
 * A collection of Site items are stored in the sites property where it will reference si
 */
export interface IGDMState {

    //Bulk of the state will be a objects that stored using the 'key/uri'
    sites: IStateSites;
    siteItems: IStateSiteItems;
    versions: IStateVersions;
    users: IStateUsers;
    itemUsers: IStateItemUsers;
    crs: IStateCRS;

    currentCategory: string;
    categories: IStateCategories;
    categoryView: IStateCategoryView;
    detailView: IStateDetailView;

    selectedSite: string;

    selectedSiteItems: string[];
    currentUser: string;

    //### UI Data
    // TODO: refactor ui state into a better structure
    uiInfoPanel: IInfoPanelState;
    uiToolbar: IToolbarState;

    uiItemMenu: IItemMenuState;
}

//########### State Types - Wrapper types to expose the 'key' value
export interface IStateSites {[key: string]: ISite}
export interface IStateSiteItems {[key: string]: ISiteContentItem}
export interface IStateVersions {[key: string]: IVersion}
export interface IStateUsers {[key: string]: IUser}
export interface IStateItemUsers {[key: string]: IItemUser}
export interface IStateCRS {[key: string]: ICRS}

/**
 * Categories state
 */
export interface IStateCategories {[key: string]: ICategory}
export interface IStateCategoryView {[key: string]: ICategoryView}
export interface IStateDetailView {[key: string]: IDetailView}


//########### Actual Types -

/**
 * This will be used with UI to assist with displaying items that are been created, updated, deleted
 */
export interface IAsyncItem {asyncState?: string}

export interface IBaseType extends IAsyncItem{
    uri: string;
    name?: string;
    description?: string;
    type?: tItemType;
    dateCreated?: string;
    dateModified?: string;
}

export interface IShareable extends IBaseType {
    users: string[]
}

export interface ISite extends IShareable {
    /**
     * @see - {IGDMState.siteItems}
     */
    items: string[]; //String IDS
    currentVersionUri: string;
    versions: string[]; //String IDS
    crs: string; //String key to CRS Collection
    ownerUri?: string;
}

/**
 * Represents the properties shown in the tile view only
 *
 */
export interface ICRS extends IBaseType {
    defaultUnit: string; // the unit of measure
    authority: string;
    srid: string;
    grouping: string;       // TODO: remove this -- just use the referenceSRS field
    horizontalSRS: string;
    verticalSRS: string;
    referenceSRS?: {       // reference SRS if this is a local CRS
        name: string;
        uri: string;
    };
    sourceSRS?: string;     // TODO: use the referenceSRS instead
}

export interface ISiteContentItem extends IShareable {
    /**
     * Uri for the current version
     * @see - {IGDMState.versions}
     */
    currentVersionUri: string;

    /**
     * Collection of version uris associated with this ISiteItemContentItem
     * @see - {IGDMState.versions}
     */
    versions: string[]


    /**
     * @see - {IGDMState.users}
     */
    ownerUri: string;

    /**
     * @see - {IGDMState.users}
     */
    lockOwnerUri: string;

    /**
     * @see - {IGDMState.IItemUsers}
     */
    users: string[] //Collection of URI IDS to SiteItemUsers

    crs: string; //String key to CRS Collection
}

export interface IVersion extends IBaseType {
    createdBy: string; //String uri id to users collection
    state: string;
    versionLabel?: string; // sourced from label property from item version
}

export interface IUser extends IBaseType {
    firstName?: string;
    lastName?: string
}

export interface IItemUser extends IAsyncItem {
    /**
     * @see {IGDMState.users}
     */
    userUri: string; //ID to the Users collection
    itemUri: string; //ID of the item within the specified collection
    itemCollectionName: string; // pointer to the collection that contains the itemUri
    permission: string
    sharedBy: string; // ID of the user who shared the item with the user
}

export interface ISiteItemActions {
    /**
     * @see {IGDMState.siteItems}
     */
    iteItemUri: string;

    preview: boolean;
    open: boolean;
    lock: boolean;
    unlock: boolean;
    publish: boolean;
    share: boolean;
    newVersion: boolean;
    rename: boolean;
    deleteItem: boolean;
    download: boolean;
}

/**
 * Moved from IDataSource
 */
export interface IGetSiteItemsData {
    siteUri: string;
    siteItems: ISiteContentItem[];
    versions: IVersion[];
    users: IUser[];
    userPermissions: IItemUser[];
}

/**
 * UI Data state representing the info panel
 * Primarily to indicate if it is visible and what the currently
 */
export interface IInfoPanelState {
    visible: boolean;

    /**
     * @See UIData/InfoPanel navs
     */
    selectedNav: string;
}

/**
 * State representing the Toolbar
 *
 * Currently only applicable for the Layout View
 */
export interface IToolbarState {
    isTileLayout: boolean;
}

/**
 * State representing the current view of the sites list,
 *
 * currently either "Categories" or "Sites"
 */
export interface IItemMenuState {
    visible: boolean;
    currentView: string;
}

/**
 *
 * Categories State Refactor
 *
 */

/**
 * Base Category definition
 */
export interface ICategory {
    view: string[];
    selectedView: string;
    parentDetailView: string;
    property: string;
    item: string;
}

/**
 * Category View
 *
 * Ties a Category to a detail view
 */
export interface ICategoryView {
    key?: string;
    label: string;
    listProperty: string;
    detailView: string;
}

/**
 * State of the Detail View in light of a Category
 *
 * Contains Category-specific items and their UI state (selected/not selected)
 */
export interface IDetailView {
    listProperty: string;
    childCategory: string;
    selectedItems: string[]; // <uuid><userUri>
}

/**
 * Interface to wrap the item with context information (source state collection)
 * to pass down to consuming controls
 */
export interface IMetaDataBaseType extends IBaseType {
    itemCollection: string;
}

/**
 * Interface to describe a vague contract to be fufilled by the smart control in a smart->dumb control pattern
 *
 * T -> type describing property data passed to child
 */
export interface IGDMParentControl<T> {
    storeUpdate?(); // trigger
    parentChildBridgeData: T;
}

