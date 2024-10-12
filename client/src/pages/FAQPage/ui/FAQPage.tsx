import "./FAQPage.scss";
import "@/shared/main.scss";
import { useEffect, useState } from "react";
import { memo } from "react";
import { FAQHeader, FAQTabs } from "@/widgets/FAQPage_widgets/FAQHeader";
import { FAQPageContext } from "../model/FAQPageContext";
import { FAQTab } from "@/widgets/FAQPage_widgets/FAQTab";
import { AskQuestion } from "@/widgets/Global_widgets/AskQuestion";
import styles from "./FAQPage.module.scss";

export const FAQPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("FAQ");
    document.title = `TeleWorks | Ответы на вопросы`;
  }, []);

  const [ActiveFAQTab, setActiveFAQTab] = useState<FAQTabs>(FAQTabs.GENERAL);

  return (
    <FAQPageContext.Provider
      value={{
        ActiveFAQTab,
        setActiveFAQTab,
      }}
    >
      <main className="Page FAQ__main">
        <div className="padding">
          <FAQHeader />
          <FAQTab />
          <AskQuestion className={styles.FAQ__AskQuestion} />
        </div>
      </main>
    </FAQPageContext.Provider>
  );
});
