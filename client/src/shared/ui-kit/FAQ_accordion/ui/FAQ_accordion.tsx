import styles from "./FAQ_accordion.module.scss";
import { memo } from "react";
import { FAQ_accordionProps } from "../model/FAQ_accordion_types";
import { Accordion } from "@szhsin/react-accordion";
import { FAQTab_Accordion_item } from "./FAQTab_Accordion_item/ui/FAQTab_Accordion_item";

export const FAQ_accordion: React.FC<FAQ_accordionProps> = memo(
  ({ FAQ_accordion_items }): React.JSX.Element => {
    return (
      <div
        className={`${styles.FAQ_accordion__wrapper} Page__BoxShadowWrapper`}
      >
        <Accordion
          className={styles.FAQ_accordion__accordion}
          transition
          transitionTimeout={250}
        >
          {FAQ_accordion_items.map((FAQ_accordion_item) => (
            <FAQTab_Accordion_item
              key={FAQ_accordion_item.title}
              header={FAQ_accordion_item.title}
            >
              {FAQ_accordion_item.desc}
            </FAQTab_Accordion_item>
          ))}
        </Accordion>
      </div>
    );
  },
);
FAQ_accordion.displayName = "FAQ_accordion";
