import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./layouts/BaseLayout/ui/BaseLayout";
import { Provider } from "react-redux";
import { store } from "@/shared/config/store/AppStore";
import { ScrollToTop } from "@/shared/utils/ScrollToTop";

// TODO: убрать из ридми текст о заморозке при разморозке проекта
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
