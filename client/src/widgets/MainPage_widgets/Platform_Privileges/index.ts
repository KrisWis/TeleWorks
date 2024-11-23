import { lazy } from "react";

export const Platform_Privileges: React.LazyExoticComponent<React.FC> = lazy(
  () =>
    import("./ui/Platform_Privileges").then(({ Platform_Privileges }) => ({
      default: Platform_Privileges,
    })),
);
