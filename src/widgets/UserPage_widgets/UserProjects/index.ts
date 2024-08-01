import { lazy } from "react";
import { UserProjectsProps } from "./model/UserProjects_types";
export * from "./ui/UserProjects";

export const UserProjects: React.LazyExoticComponent<
  React.FC<UserProjectsProps>
> = lazy(() =>
  import("./ui/UserProjects").then(({ UserProjects }) => ({
    default: UserProjects,
  }))
);
