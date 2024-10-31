import styles from "./FAQPageContainer.module.scss";
import { memo, useState } from "react";
import { FAQPageContext } from "..";
import { FAQHeader, FAQTabs } from "@/widgets/FAQPage_widgets/FAQHeader";
import { FAQTab } from "@/widgets/FAQPage_widgets/FAQTab";
import { AskQuestion } from "@/shared/ui-kit/AskQuestion";

export const FAQPageContainer: React.FC = memo((): React.JSX.Element => {
  // Создание стейта для контекста
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
