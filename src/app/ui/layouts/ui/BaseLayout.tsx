import {
  CatalogPage,
  InternalPage,
  MyProjectsPage,
  ProfilePage,
  ProjectPage,
  SpecialistServicesPage,
} from "@/pages";
import "./BaseLayout.module.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages";
import "../../../../shared/reset.scss";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="profile" element={<ProfilePage />} />
      <Route path="myProjects" element={<MyProjectsPage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="internal" element={<InternalPage />} />
      <Route path="services" element={<SpecialistServicesPage />} />
      <Route path="project" element={<ProjectPage />} />
    </Routes>
  );
};
