import { FAQPageContext } from "@/app/layouts/BaseLayout/ui/pageWrappers/FAQPageContainer";
import { FAQTabs } from "../model/FAQHeader_types";
import styles from "./FAQHeader.module.scss";
import { memo, useContext } from "react";

export const FAQHeader: React.FC = memo((): React.JSX.Element => {
  const { ActiveFAQTab, setActiveFAQTab } = useContext(FAQPageContext);

  return (
    <div className={styles.FAQHeader}>
      <div className={styles.FAQHeader__header}>
        <h1 className={styles.FAQHeader__caption}>Часто задаваемые вопросы</h1>

        <a
          className={styles.FAQHeader__notFindAnswer}
          href="https://t.me/TeleWorksSupportbot"
        >
          Не нашли ответ на вопрос?
        </a>
      </div>

      <div className={`${styles.FAQHeader__tabs} Page__SirineWrapper`}>
        {(Object.keys(FAQTabs) as Array<keyof typeof FAQTabs>).map((tab) => (
          <span
            key={tab}
            className={`${styles.FAQHeader__tab} ${ActiveFAQTab == FAQTabs[tab] ? styles.FAQHeader__tab__active : ""}`}
            onClick={() => setActiveFAQTab(FAQTabs[tab])}
          >
            {FAQTabs[tab]}
          </span>
        ))}
      </div>
    </div>
  );
});
FAQHeader.displayName = "FAQHeader";
