import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/ui/BaseLayout";
import { Provider } from "react-redux";
import { store } from "./store/AppStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/TeleWorks/">
      <App />
    </BrowserRouter>
  </Provider>
);
