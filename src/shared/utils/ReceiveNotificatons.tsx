import { ReceiveNotifications } from "@/widgets";
import { useRoutes } from "react-router-dom";

const element = <ReceiveNotifications />;
export const ReceiveNotificationRoutes = (): JSX.Element =>
  useRoutes(
    ["myProjects/:id", "catalog", "internal"].map((path) => ({ path, element }))
  );
