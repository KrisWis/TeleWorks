import {
  CatalogPage,
  InternalPage,
  MainPage,
  MyProjectsPage,
  ProfilePage,
  ProjectPage,
  SpecialistServicesPage,
} from "@/pages";
import { RouteProps } from "react-router-dom";

export enum Routes {
  MAIN = "/",
  PROFILE = "profile",
  MYPROJECTS = "myProjects",
  CATALOG = "catalog",
  INTERNAL = "internal",
  SERVICES = "services",
  PROJECT = "project",
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
];
