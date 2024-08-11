import "./BaseLayout.module.scss";
import { Route, Routes } from "react-router-dom";
import "@/shared/reset.scss";
import { routes } from "@/app/routes/Routes";
import { Suspense } from "react";
import { SemipolarLoading } from "react-loadingg";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <Suspense fallback={<SemipolarLoading color="var(--main-color)" />}>
      <Routes>
        {(Object.keys(routes) as Array<keyof typeof routes>).map((route) => (
          <Route key={route} path={route} element={routes[route]} />
        ))}
      </Routes>
    </Suspense>
  );
};
