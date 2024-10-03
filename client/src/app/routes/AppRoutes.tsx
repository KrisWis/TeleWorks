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
import {
  TelegramChannelStatsPage,
  TelegramChannelStatsPageLazy,
} from "@/pages/TelegramChannelStatsPage";
import { TurnkeyWebsitesPage } from "@/pages/TurnkeyWebsitesPage";
import { UserEditPage } from "@/pages/UserEditPage";
import { UserPage } from "@/pages/UserPage/";
import { ReactElement } from "react";
import { PortNow } from "../layouts/BaseLayout/model/BaseLayout__data";

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

  NOT_FOUND = "*",
}

export const BlogRoutes = [
  AppRoutes.BLOG,
  AppRoutes.BLOG_POST,
  AppRoutes.BLOG_CREATE,
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
      <TelegramChannelStatsPageLazy />
    ) : (
      <TelegramChannelStatsPage />
    ),
  [AppRoutes.BLOG]: <BlogPage />,
  [AppRoutes.BLOG_POST]: <BlogPostPage />,
  [AppRoutes.BLOG_CREATE]: <BlogCreatePage />,
  [AppRoutes.NOT_FOUND]: <NotFoundPage />,
};
