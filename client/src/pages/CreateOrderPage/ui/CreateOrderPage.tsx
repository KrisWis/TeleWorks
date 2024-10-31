import "./CreateOrderPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { CreateOrderContainer } from "@/app/layouts/BaseLayout/ui/pageWrappers/CreateOrderContainer";

export const CreateOrderPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("CreateOrderPage");
    document.title = `TeleWorks | Создание заказа`;
  }, []);

  return <CreateOrderContainer />;
});
