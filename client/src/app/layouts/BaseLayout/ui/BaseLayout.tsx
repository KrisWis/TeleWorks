import "./BaseLayout.module.scss";
import { Route, Routes } from "react-router-dom";
import "@/shared/reset.scss";
import { Suspense } from "react";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";
// eslint-disable-next-line teleworks/imports-from-layers
import { HeaderRoutes, routes } from "@/app/routes/AppRoutes";
import { PageLoading } from "@/shared/lib/PageLoading/PageLoading";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Routes>
        {HeaderRoutes.map((headerRoute) => (
          <Route
            key={headerRoute.path}
            path={headerRoute.path}
            element={<Header view={headerRoute.headerView} />}
          />
        ))}
        <Route path="*" element={<Header />} />
      </Routes>

      <Suspense fallback={<PageLoading />}>
        <Routes>
          {(Object.keys(routes) as Array<keyof typeof routes>).map((route) => (
            <Route key={route} path={route} element={routes[route]} />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};
