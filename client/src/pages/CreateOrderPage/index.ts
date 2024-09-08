export { CreateOrderPageContext } from "./model/CreateOrderPageContext";

import { lazy } from "react";

export const CreateOrderPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/CreateOrderPage").then(({ CreateOrderPage }) => ({
    default: CreateOrderPage,
  }))
);
