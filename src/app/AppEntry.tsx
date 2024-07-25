import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/ui/BaseLayout";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/TeleWorks/">
    <App />
  </BrowserRouter>
);
