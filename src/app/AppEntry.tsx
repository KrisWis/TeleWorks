import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/ui/BaseLayout";
import { HeaderRoutes } from "@/shared/utils/HeaderRoutes";
import { FooterRoutes } from "@/shared/utils/FooterRoutes";
import { ReceiveNotificationRoutes } from "@/shared/utils/ReceiveNotificatons";
import ReactDOM from "react-dom";

// @ts-expect-error потому что тут ругается react-router-dom
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/TeleWorks/">
    <HeaderRoutes />
    <App />
    <ReceiveNotificationRoutes />
    <FooterRoutes />
  </BrowserRouter>
);
