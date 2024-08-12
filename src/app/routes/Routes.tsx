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
import { UserEditPage } from "@/pages/UserEditPage";
import { UserPage } from "@/pages/UserPage/";
import { ReactElement } from "react";

export enum Routes {
  MAIN = "/",

  PROFILE = "/profile",

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

  NOT_FOUND = "*",
}

type routesList = {
  [route in Routes]: ReactElement;
};

export const routes: routesList = {
  [Routes.MAIN]: <MainPage />,
  [Routes.PROFILE]: <ProfilePage />,
  [Routes.MYPROJECTS]: <MyProjectsPage />,
  [Routes.CATALOG]: <CatalogPage />,
  [Routes.INTERNAL]: <InternalPage />,
  [Routes.SERVICES]: <SpecialistServicesPage />,
  [Routes.PROJECT]: <ProjectPage />,
  [Routes.USER]: <UserPage />,
  [Routes.USER_EDIT]: <UserEditPage />,
  [Routes.CREATE_CARD]: <CreateCardPage />,
  [Routes.CREATE_ORDER]: <CreateOrderPage />,
  [Routes.FAQ]: <FAQPage />,
  [Routes.NOT_FOUND]: <NotFoundPage />,
};
