import "./FAQPage.scss";
import "@/shared/main.scss";
import { FAQPageContainer } from "@/app/layouts/BaseLayout/ui/pageWrappers/FAQPageContainer";
import { useEffect } from "react";
import { memo } from "react";

export const FAQPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("FAQ");
    document.title = `TeleWorks | Ответы на вопросы`;
  }, []);

  return <FAQPageContainer />;
});
