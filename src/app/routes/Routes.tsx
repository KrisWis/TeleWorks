import { CatalogPage } from "@/pages/CatalogPage";
import { CreateCardPage } from "@/pages/CreateCardPage";
import { InternalPage } from "@/pages/InternalPage";
import { MainPage } from "@/pages/MainPage";
import { MyProjectsPage } from "@/pages/MyProjectsPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { SpecialistServicesPage } from "@/pages/SpecialistServicesPage";
import { UserPage } from "@/pages/UserPage/ui/UserPage";
import { RouteProps } from "react-router-dom";

export enum Routes {
  MAIN = "/",
  PROFILE = "/profile",
  MYPROJECTS = "/myProjects",
  CATALOG = "/catalog",
  INTERNAL = "/internal",
  SERVICES = "/services",
  PROJECT = "/project",
  USER = "/user",
  CREATE_CARD = "/create-card",
}

export const routes: RouteProps[] = [
  {
    path: Routes.MAIN,
    element: <MainPage />,
  },

  {
    path: Routes.PROFILE,
    element: <ProfilePage />,
  },

  {
    path: Routes.MYPROJECTS,
    element: <MyProjectsPage />,
  },

  {
    path: Routes.CATALOG,
    element: <CatalogPage />,
  },

  {
    path: Routes.INTERNAL,
    element: <InternalPage />,
  },

  {
    path: Routes.SERVICES,
    element: <SpecialistServicesPage />,
  },

  {
    path: Routes.PROJECT,
    element: <ProjectPage />,
  },

  {
    path: Routes.USER,
    element: <UserPage />,
  },

  {
    path: Routes.CREATE_CARD,
    element: <CreateCardPage />,
  },
];
