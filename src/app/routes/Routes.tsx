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

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <MainPage />,
  },

  {
    path: "profile",
    element: <ProfilePage />,
  },

  {
    path: "myProjects",
    element: <MyProjectsPage />,
  },

  {
    path: "catalog",
    element: <CatalogPage />,
  },

  {
    path: "internal",
    element: <InternalPage />,
  },

  {
    path: "services",
    element: <SpecialistServicesPage />,
  },

  {
    path: "project",
    element: <ProjectPage />,
  },
];
