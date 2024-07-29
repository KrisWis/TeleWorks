import "./BaseLayout.module.scss";
import { Route, RouteProps, Routes } from "react-router-dom";
import "@/shared/reset.scss";
import { routes } from "@/app/routes/Routes";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <Routes>
      {routes.map((route: RouteProps) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
