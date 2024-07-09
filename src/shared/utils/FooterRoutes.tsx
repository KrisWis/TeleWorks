import { Footer } from "@/widgets";
import { useRoutes } from "react-router-dom";

const element = <Footer />;
export const FooterRoutes = (): JSX.Element =>
  useRoutes(["myProjects/:id"].map((path) => ({ path, element })));
