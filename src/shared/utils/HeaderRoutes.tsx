import { Header } from "@/widgets";
import { useRoutes } from "react-router-dom";

const element = <Header />;
export const HeaderRoutes = (): JSX.Element =>
  useRoutes(
    ["/", "myProjects/:id", "catalog", "internal"].map((path) => ({
      path,
      element,
    }))
  );
