import "./BaseLayout.module.scss";
import { Route, Routes } from "react-router-dom";
import "@/shared/reset.scss";
import { HeaderRoutes, routes } from "@/app/routes/AppRoutes";
import { Suspense } from "react";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";
import { PageLoading } from "@/shared/ui-kit/PageLoading/PageLoading";

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
