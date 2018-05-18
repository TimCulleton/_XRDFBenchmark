// ///<amd-module name="DS/GEODataExplorerControls/Redux/Actions/ActionEvents"/>
//
// /**
//  * Created by hq9 on 8/8/2017
//  */
//
// /**
//  * @file All the currently defined action events.
//  * Any action that will be asynchronous should two event IDs.
//  * One for initiating and another for receiving the result
//  */
//
//
// // #########################################
// // ## Site Actions
//
// export const REQUESTING_SITES = `REQUESTING_SITES`;
// export const RECEIVING_SITES = `RECEIVING_SITES`;
//
//
// export const REQUESTING_UPDATES = `REQUESTING_UPDATES`;
// export const RECEIVING_UPDATES = `RECEIVING_UPDATES`;
//
// export const ADDING_USERS_TO_SITE = `ADDING_USERS_TO_SITE`;
// export const USERS_ADDED_TO_SITE = `USERS_ADDED_TO_SITE`;
//
// export const UPDATING_USER_PERMISSION_ON_SITE = `UPDATING_USER_PERMISSION_ON_SITE`;
// export const USER_PERMISSIONS_UPDATED_ON_SITE = `USER_PERMISSIONS_UPDATED_ON_SITE`;
//
// export const REMOVING_USERS_FROM_SITE = `REMOVING_USER_FROM_SITE`;
// export const USERS_REMOVED_FROM_SITE = `USERS_REMOVED_FROM_SITE`;
//
// export const ADD_SITES = `ADD_SITES`;
// export const REMOVE_SITES = `REMOVE_SITES`;
//
// // #########################################
//
//
// // #########################################
// // ## Site Item Actions
//
// export const REQUESTING_SITE_ITEMS = `REQUESTING_SITE_ITEMS`;
// export const RECEIVING_SITE_ITEMS = `RECEIVING_SITE_ITEMS`;
//
// export const REQUESTING_ALL_SITE_ITEMS_OF_TYPE = `REQUESTING_ALL_SITE_ITEMS_OF_TYPE`;
// export const RECEIVING_ALL_SITE_ITEMS_OF_TYPE = `RECEIVING_ALL_SITE_ITEMS_OF_TYPE`;
//
// export const ADDING_ITEM_VERSION = `ADDING_ITEM_VERSION`;
// export const ADDED_ITEM_VERSION = `ADDED_ITEM_VERSION`;
// export const ADD_ITEM_VERSION = `ADD_ITEM_VERSION`;
//
// export const LOCKING_SITE_ITEM = `LOCKING_SITE_ITEM`;
// export const LOCKED_SITE_ITEM = `LOCKED_SITE_ITEM`;
//
// export const UNLOCKING_SITE_ITEM = `UNLOCKING_SITE_ITEM`;
// export const UNLOCKED_SITE_ITEM = `UNLOCKED_SITE_ITEM`;
//
// export const PUBLISHING_SITE_ITEM = `PUBLISHING_SITE_ITEM`;
// export const PUBLISHED_SITE_ITEM = `PUBLISHED_SITE_ITEM`;
//
// export const ADDING_USER_TO_SITE_ITEM = `ADDING_USER_TO_SITE_ITEM`;
// export const USER_ADDED_TO_SITE_ITEM = `USER_ADDED_TO_SITE_ITEM`;
//
// export const ADDING_USERS_TO_SITE_ITEM = `ADDING_USERS_TO_SITE_ITEM`;
// export const USERS_ADDED_TO_SITE_ITEM = `USERS_ADDED_TO_SITE_ITEM`;
//
// export const UPDATING_USER_PERMISSION_ON_SITE_ITEM = `UPDATING_USER_PERMISSION_ON_SITE_ITEM`;
// export const USER_PERMISSION_UPDATED_ON_SITE_ITEM = `USER_PERMISSION_UPDATED_ON_SITE_ITEM`;
//
// export const REMOVING_USER_FROM_SITE_ITEM = `REMOVING_USER_FROM_SITE_ITEM`;
// export const USER_REMOVED_FROM_SITE_ITEM = `USER_REMOVED_FROM_SITE_ITEM`;
//
// export const ADD_SITE_ITEMS = `ADD_SITE_ITEMS`;
// export const REMOVE_SITE_ITEMS = `REMOVE_SITE_ITEMS`;
//
// // #########################################
// // ## CRS Actions
//
// export const ADD_DUMMY_CRS = `ADD_DUMMY_CRS`;
// export const ADD_REAL_CRS = `ADD_REAL_CRS`;
// export const REQUESTING_CRS = `REQUESTING_CRS`;
// export const RECEIVING_CRS = `RECEIVING_CRS`;
//
// export const ADD_CRSS = `ADD_CRSS`;
// export const REMOVE_CRSS = `REMOVE_CRSS`;
//
// // #########################################
// // ## Selection
//
// // ## Site
// export const SET_SELECTED_SITE = `SET_SELECTED_SITE`;
//
// // ## Site Creation
// export const CREATING_NEW_SITE = `CREATING_NEW_SITE`;
// export const NEW_SITE_CREATED = `NEW_SITE_CREATED`;
//
// export const CREATE_REAL_SITE = `CREATING_REAL_SITE`;
// export const ADD_DUMMY_SITE = `ADD_DUMMY_SITE`;
// export const ADD_REAL_SITE = `ADD_REAL_SITE`;
//
// // ## Site Items
// export const ADD_SITE_ITEM_TO_SELECTION = `ADD_SITE_ITEM_TO_SELECTION`;
// export const REMOVE_SITE_ITEM_FROM_SELECTION = `REMOVE_SITE_ITEM_FROM_SELECTION`;
// export const CLEAR_SITE_ITEM_SELECTION = `CLEAR_SITE_ITEM_SELECTION`;
//
// export const CREATING_NEW_SITE_ITEM = `CREATING_NEW_SITE_ITEM`;
// export const NEW_SITE_ITEM_CREATED = `NEW_SITE_ITEM_CREATED`;
//
// export const CREATE_REAL_SITE_ITEM = `CREATE_REAL_SITE_ITEM`;
// export const ADD_DUMMY_SITE_ITEM = `ADD_DUMMY_SITE_ITEM`;
// export const ADD_REAL_SITE_ITEM = `ADD_REAL_SITE_ITEM`;
//
// // ## Boreholes
// export const UPDATING_SITE_BOREHOLES = `UPDATING_SITE_BOREHOLES`;
// export const UPDATED_SITE_BOREHOLES = `UPDATED_SITE_BOREHOLES`;
//
// // #########################################
// // ## Current User
// export const SET_CURRENT_USER = `SET_CURRENT_USER`;
// export const GETTING_CURRENT_USER = `GETTING_CURRENT_USER`;
//
//
// // #########################################
// // ## UI Info Panel
// export const SET_UI_INFO_PANEL_VISIBLE = `SET_UI_INFO_PANEL_VISIBLE`;
// export const SET_UI_INFO_PANEL_ACTIVE_PANEL = `SET_UI_INFO_PANEL_ACTIVE_PANEL`;
//
// export const SET_UI_TILE_LAYOUT_VIEW = `SET_UI_TILE_LAYOUT_VIEW`;
//
// export const SET_ITEMS_MENU_VIEW_TYPE = `SET_ITEMS_MENU_VIEW_TYPE`;
// export const SET_ITEMS_MENU_VISIBLE = `SET_ITEMS_MENU_VISIBLE`;
//
// // #########################################
// // ## Categories
// export const SET_SELECTED_CATEGORY = `SET_SELECTED_CATEGORY`;
// export const POPULATING_SITES_CATEGORY = `POPULATING_SITES_CATEGORY`;
//
// export const SET_CURRENT_CATEGORY = `SET_CURRENT_CATEGORY`;
// export const SET_SELECTED_VIEW_CATEGORY = `SET_SELECTED_VIEW_CATEGORY`;
//
// export const SET_ITEM_PROPERTY_CATEGORY = `SET_ITEM_PROPERTY_CATEGORY`;
//
// // #########################################
// // ## Selection
// export const ADD_ITEM_TO_SELECTION = `ADD_ITEM_TO_SELECTION`;
// export const REMOVE_ITEM_FROM_SELECTION = `REMOVE_ITEM_FROM_SELECTION`;
// export const CLEAR_ITEM_SELECTION = `CLEAR_ITEM_SELECTION`;
// export const SET_ITEM_SELECTION = `SET_ITEM_SELECTION`;
//
// // #########################################
// // ## USERS
// export const ADD_USERS = `ADD_USERS`;
// export const REMOVE_USERS = `REMOVE_USERS`;
//
// // #########################################
// // ## ITEM USERS
// export const ADD_ITEM_USERS = `ADD_ITEM_USERS`;
// export const REMOVE_ITEM_USERS = `REMOVE_ITEM_USERS`;
//
// // #########################################
// // ## Versions
// export const ADD_VERSIONS = `ADD_VERSIONS`;
// export const REMOVE_VERSIONS = `REMOVE_VERSIONS`;
