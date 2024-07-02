import { Header } from "@/widgets";
import { useRoutes } from "react-router-dom";

const element = <Header />;
export const HeaderRoutes = (): JSX.Element =>
  useRoutes(["/"].map((path) => ({ path, element })));
