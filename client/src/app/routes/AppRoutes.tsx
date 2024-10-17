import { BlogCreatePage } from "@/pages/BlogCreatePage";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CatalogPage } from "@/pages/CatalogPage";
import { CreateCardPage } from "@/pages/CreateCardPage";
import { CreateOrderPage } from "@/pages/CreateOrderPage";
import { FAQPage } from "@/pages/FAQPage";
import { InternalPage } from "@/pages/InternalPage";
import { MainPage } from "@/pages/MainPage";
import { MyProjectsPage } from "@/pages/MyProjectsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { SpecialistServicesPage } from "@/pages/SpecialistServicesPage";
import { TelegramChannelStatsPage } from "@/pages/TelegramChannelStatsPage";
import { TurnkeyWebsitesPage } from "@/pages/TurnkeyWebsitesPage";
import { UserEditPage } from "@/pages/UserEditPage";
import { UserPage } from "@/pages/UserPage/";
import { ReactElement } from "react";
import { KindDeedsPage } from "@/pages/KindDeedsPage";
import { KindDeedsCreateRequestPage } from "@/pages/KindDeedsCreateRequest";
import { IndexedDBStore, PortNow } from "..";
import { HeaderViews } from "@/widgets/Global_widgets/Header/model/Header_props";

export enum AppRoutes {
  MAIN = "/",

  CHANNEL_PROFILE = "/channel/:id",

  MYPROJECTS = "/myProjects",

  CATALOG = "/catalog",

  INTERNAL = "/internal",

  SERVICES = "/services",

  PROJECT = "/project",

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

export const BlogRoutes = [
  AppRoutes.BLOG,
  AppRoutes.BLOG_POST,
  AppRoutes.BLOG_CREATE,
];

export const FreelanceRoutes = [
  AppRoutes.CREATE_ORDER,
  AppRoutes.PROJECT,
  AppRoutes.SERVICES,
  AppRoutes.USER,
  AppRoutes.USER_EDIT,
];

export const KindDeedsRoutes = [
  AppRoutes.KIND_DEEDS,
  AppRoutes.KIND_DEEDS_CREATE_REQUEST,
];

type routesList = {
  [route in AppRoutes]: ReactElement;
};

export const routes: routesList = {
  [AppRoutes.MAIN]: <MainPage />,
  [AppRoutes.CHANNEL_PROFILE]: <ProfilePage />,
  [AppRoutes.MYPROJECTS]: <MyProjectsPage />,
  [AppRoutes.CATALOG]: <CatalogPage />,
  [AppRoutes.INTERNAL]: <InternalPage />,
  [AppRoutes.SERVICES]: <SpecialistServicesPage />,
  [AppRoutes.PROJECT]: <ProjectPage />,
  [AppRoutes.USER]: <UserPage />,
  [AppRoutes.USER_EDIT]: <UserEditPage />,
  [AppRoutes.CREATE_CARD]: <CreateCardPage />,
  [AppRoutes.CREATE_ORDER]: <CreateOrderPage />,
  [AppRoutes.FAQ]: <FAQPage />,
  [AppRoutes.TURNKEY_WEBSITES]: <TurnkeyWebsitesPage />,
  [AppRoutes.TELEGRAM_CHANNEL_STATS]:
    PortNow == "6007" ? (
      <TelegramChannelStatsPage />
    ) : (
      <TelegramChannelStatsPage />
    ),
  [AppRoutes.BLOG]: <BlogPage />,
  [AppRoutes.BLOG_POST]: <BlogPostPage />,
  [AppRoutes.BLOG_CREATE]: <BlogCreatePage />,
  [AppRoutes.KIND_DEEDS]: <KindDeedsPage />,
  [AppRoutes.KIND_DEEDS_CREATE_REQUEST]: <KindDeedsCreateRequestPage />,
  [AppRoutes.NOT_FOUND]: <NotFoundPage />,
};

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

interface HeaderRoute {
  path: AppRoutes;
  headerView: HeaderViews;
}

export const HeaderRoutes: HeaderRoute[] = [
  {
    path: AppRoutes.TELEGRAM_CHANNEL_STATS,
    headerView: HeaderViews.TELEGRAM_CHANNEL_STATS,
  },

  ...KindDeedsRoutes.map((route) => ({
    path: route,
    headerView: HeaderViews.KIND_DEEDS,
  })),

  {
    path: AppRoutes.CATALOG,
    headerView: HeaderViews.CHANNELS,
  },

  ...BlogRoutes.map((route) => ({
    path: route,
    headerView: HeaderViews.BLOG,
  })),

  ...FreelanceRoutes.map((route) => ({
    path: route,
    headerView: HeaderViews.FREELANCE,
  })),
];
