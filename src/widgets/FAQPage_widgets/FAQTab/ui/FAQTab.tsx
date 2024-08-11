import { FAQPageContext } from "@/pages/FAQPage";
import { faqTabs } from "../model/FAQTab_data";
import styles from "./FAQTab.module.scss";
import { memo, useContext } from "react";
import { FAQTab_Accordion_item } from "./FAQTab_Accordion_item/ui/FAQTab_Accordion_item";
import { Accordion } from "@szhsin/react-accordion";

export const FAQTab: React.FC = memo((): React.JSX.Element => {
  const { ActiveFAQTab } = useContext(FAQPageContext);

  return (
    <div className={styles.FAQTab}>
      <h2 className={styles.FAQTab__caption}>{ActiveFAQTab}</h2>

      <div className={`${styles.FAQTab__wrapper} Page__BoxShadowWrapper`}>
        <Accordion
          className={styles.FAQTab__accordion}
          transition
          transitionTimeout={250}
        >
          {faqTabs[ActiveFAQTab].map((FAQTabItem) => (
            <FAQTab_Accordion_item
              key={FAQTabItem.title}
              header={FAQTabItem.title}
            >
              {FAQTabItem.desc}
            </FAQTab_Accordion_item>
          ))}
        </Accordion>
      </div>
    </div>
  );
});
