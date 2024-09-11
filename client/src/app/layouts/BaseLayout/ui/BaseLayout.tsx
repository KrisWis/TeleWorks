import "./BaseLayout.module.scss";
import { Route, Routes } from "react-router-dom";
import "@/shared/reset.scss";
import { AppRoutes, routes } from "@/app/routes/AppRoutes";
import { Suspense } from "react";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";
import { PageLoading } from "@/shared/ui-kit/PageLoading/PageLoading";
import { HeaderViews } from "@/widgets/Global_widgets/Header/model/Header_props";

export const App: React.FC = (): React.JSX.Element => {
  return (
    <>
      <Routes>
        <Route
          path={AppRoutes.TELEGRAM_CHANNEL_STATS}
          element={<Header view={HeaderViews.TELEGRAM_CHANNEL_STATS} />}
        />

        <Route
          path={AppRoutes.BLOG}
          element={<Header view={HeaderViews.BLOG} />}
        />
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
