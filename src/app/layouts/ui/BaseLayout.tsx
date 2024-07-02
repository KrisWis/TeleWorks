import { ProfilePage } from "@/pages";
import "./BaseLayout.module.scss";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "@/pages";
import { URL_PART } from "../model/BaseLayout__data";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path={`${URL_PART}`} element={<MainPage />} />
      <Route path={`${URL_PART}/profile/:id`} element={<ProfilePage />} />
    </Routes>
  );
};
