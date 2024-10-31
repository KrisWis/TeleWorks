import { IndexedDBStore } from "../types/global";

export enum AppRoutes {
  MAIN = "/",

  CHANNEL_PROFILE = "/channel/:id",

  MYPROJECTS = "/myProjects",

  CATALOG = "/catalog",

  CATALOG_CART = "/catalog/cart",

  INTERNAL = "/internal",

  SERVICES = "/services",

  PROJECT = "/services/:id",

  USER = "/user",

  USER_EDIT = "/user/edit",

  CREATE_CARD = "/create-card",

  CREATE_ORDER = "/create-order",

  FAQ = "/faq",

  TURNKEY_WEBSITES = "/turnkey-websites",

  TELEGRAM_CHANNEL_STATS = "/channel/:id/stats",

  BLOG = "/blog",

  BLOG_POST = "/blog/:id",

  BLOG_CREATE = "/blog/create",

  KIND_DEEDS = "/kind-deeds",

  KIND_DEEDS_CREATE_REQUEST = "/kind-deeds/create-request",

  NOT_FOUND = "*",
}

export const Storybook_URL_PART: string = "http://26.193.232.147:6007";

export const PortNow: string = location.port;
export let urlPart: string;
if (PortNow == "6006") {
  urlPart = "";
} else if (PortNow == "6007") {
  urlPart = "";
} else {
  urlPart = "/TeleWorks";
}
export const URL_PART = urlPart;
export const IndexedDBName: string = "TeleWorks";

export enum LocalStorageKeys {
  CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM = "CREATE_ORDER_TECHNICAL_INFORMATION_CONTAINER_FORM",
  CREATE_ORDER_STEP = "CREATE_ORDER_STEP",
  USER_EDIT_GENERAL = "USER_EDIT_GENERAL",
  USER_EDIT_ABOUT = "USER_EDIT_ABOUT",
  MOVE_TO_OPEN_CHANNEL_CART = "MOVE_TO_OPEN_CHANNEL_CART",
  BLOG_CREATE = "BLOG_CREATE",
  BLOG_POST_COMMENTS = "BLOG_POST_COMMENTS",
  KIND_DEEDS_CREATE_REQUEST = "KIND_DEEDS_CREATE_REQUEST",
}

export const IndexedDBStores: IndexedDBStore[] = [
  {
    route: AppRoutes.CREATE_ORDER,
    name: "CREATE_ORDER_FILES",
  },

  {
    route: AppRoutes.KIND_DEEDS_CREATE_REQUEST,
    name: "KIND_DEEDS_CREATE_REQUEST_IMAGES",
  },

  {
    route: AppRoutes.BLOG_CREATE,
    name: "BLOG_CREATE_IMAGES",
  },
];
