import ReactDOM from "react-dom/client";
import "../shared/index.scss";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/ui/BaseLayout";
import { HeaderRoutes } from "@/shared/utils/HeaderRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/TeleWorks/">
    <HeaderRoutes />
    <App />
  </BrowserRouter>
);
