import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/BaseLayout/ui/BaseLayout";
import { Provider } from "react-redux";
import { store } from "./store/AppStore";
import { ScrollToTop } from "@/shared/utils/ScrollToTop";

// TODO: проверить кроссбраузерность в конце разработки проекта
// TODO: сделать e2e тесты для useLocalStorage, useIndexedDB, добавления конкретных изображений на странице редактирования профиля (проверка ошибок)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter basename="/TeleWorks/">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);
