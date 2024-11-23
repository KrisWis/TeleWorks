import styles from "./TurnkeyWebsitesPageFAQ.module.scss";
import { memo } from "react";
import { turnkeyWebsitesPageFAQ_items } from "../model/TurnkeyWebsitesPageFAQ_data";
import { AskQuestion } from "@/shared/ui-kit/AskQuestion";
import { FAQ_accordion } from "@/shared/ui-kit/FAQ_accordion";

export const TurnkeyWebsitesPageFAQ: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.TurnkeyWebsitesPageFAQ}>
      <h2
        className={`TurnkeyWebsitesPage__caption ${styles.TurnkeyWebsitesPageFAQ__caption}`}
      >
        Часто задаваемые вопросы:
      </h2>

      <FAQ_accordion FAQ_accordion_items={turnkeyWebsitesPageFAQ_items} />
      <AskQuestion />
    </div>
  );
});
TurnkeyWebsitesPageFAQ.displayName = "TurnkeyWebsitesPageFAQ";
