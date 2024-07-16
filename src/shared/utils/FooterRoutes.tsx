import { Footer } from "@/widgets";
import { useRoutes } from "react-router-dom";

const element = <Footer />;
export const FooterRoutes = (): JSX.Element =>
  useRoutes(
    ["myProjects/:id", "catalog", "internal"].map((path) => ({ path, element }))
  );
