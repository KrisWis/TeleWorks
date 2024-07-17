import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/ui/BaseLayout";
import { HeaderRoutes } from "@/shared/utils/HeaderRoutes";
import { FooterRoutes } from "@/shared/utils/FooterRoutes";
import { ReceiveNotificationRoutes } from "@/shared/utils/ReceiveNotificatons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/TeleWorks/">
    <HeaderRoutes />
    <App />
    <ReceiveNotificationRoutes />
    <FooterRoutes />
  </BrowserRouter>
);
