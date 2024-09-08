export { FAQPageContext } from "./model/FAQPageContext";
import { lazy } from "react";

export const FAQPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/FAQPage").then(({ FAQPage }) => ({
    default: FAQPage,
  }))
);
