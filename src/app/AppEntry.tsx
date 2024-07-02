import ReactDOM from "react-dom/client";
import { App } from "./layouts/ui/BaseLayout.tsx";
import "../shared/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
