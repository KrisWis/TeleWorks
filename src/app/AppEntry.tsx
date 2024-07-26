import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./ui/layouts/ui/BaseLayout";
import { Provider } from "react-redux";
import { store } from "./AppStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/TeleWorks/">
      <App />
    </BrowserRouter>
  </Provider>
);
