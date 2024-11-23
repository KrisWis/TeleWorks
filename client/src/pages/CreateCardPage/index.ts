import { lazy } from "react";

export const CreateCardPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/CreateCardPage").then(({ CreateCardPage }) => ({
    default: CreateCardPage,
  })),
);
