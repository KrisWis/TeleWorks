import { IndexedDBStore } from "../types/global";

export enum AppRoutesPathes {
  MAIN = "/",

  CHANNEL_PROFILE = "/channel",

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

  TELEGRAM_CHANNEL_STATS = "/stats",

  BLOG = "/blog",

  BLOG_POST = "/blog/:id",

  BLOG_CREATE = "/blog/create",

  KIND_DEEDS = "/kind-deeds",

  KIND_DEEDS_CREATE_REQUEST = "/kind-deeds/create-request",

  NOT_FOUND = "*",
}

export const AppRoutes = {
  MAIN: () => AppRoutesPathes.MAIN,

  CHANNEL_PROFILE: (id: string = ":id") =>
    `${AppRoutesPathes.CHANNEL_PROFILE}/${id}` as AppRoutesPathes,

  MYPROJECTS: () => AppRoutesPathes.MYPROJECTS,

  CATALOG: () => AppRoutesPathes.CATALOG,

  CATALOG_CART: () => AppRoutesPathes.CATALOG_CART,

  INTERNAL: () => AppRoutesPathes.INTERNAL,

  SERVICES: () => AppRoutesPathes.SERVICES,

  PROJECT: (id: string = ":id", isOnProjectPage: boolean = false) =>
    `${!isOnProjectPage ? AppRoutesPathes.SERVICES : ""}/${id}` as AppRoutesPathes,

  USER: () => AppRoutesPathes.USER,

  USER_EDIT: () => AppRoutesPathes.USER_EDIT,

  CREATE_CARD: () => AppRoutesPathes.CREATE_CARD,

  CREATE_ORDER: () => AppRoutesPathes.CREATE_ORDER,

  FAQ: () => AppRoutesPathes.FAQ,

  TURNKEY_WEBSITES: () => AppRoutesPathes.TURNKEY_WEBSITES,

  TELEGRAM_CHANNEL_STATS: (id: string = ":id") =>
    `${AppRoutesPathes.CHANNEL_PROFILE}/${id}${AppRoutesPathes.TELEGRAM_CHANNEL_STATS}` as AppRoutesPathes,

  BLOG: () => AppRoutesPathes.BLOG,

  BLOG_POST: (id: string = ":id") =>
    `${AppRoutesPathes.BLOG}/${id}` as AppRoutesPathes,

  BLOG_CREATE: () => AppRoutesPathes.BLOG_CREATE,

  KIND_DEEDS: () => AppRoutesPathes.KIND_DEEDS,

  KIND_DEEDS_CREATE_REQUEST: () => AppRoutesPathes.KIND_DEEDS_CREATE_REQUEST,

  NOT_FOUND: () => AppRoutesPathes.NOT_FOUND,
};

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
    route: AppRoutes.CREATE_ORDER(),
    name: "CREATE_ORDER_FILES",
  },

  {
    route: AppRoutes.KIND_DEEDS_CREATE_REQUEST(),
    name: "KIND_DEEDS_CREATE_REQUEST_IMAGES",
  },

  {
    route: AppRoutes.BLOG_CREATE(),
    name: "BLOG_CREATE_IMAGES",
  },
];
