import styles from "./FAQTab_Accordion_item.module.scss";
import { AccordionItem as Item } from "@szhsin/react-accordion";
import ChevronSVG from "@/shared/assets/icons/FAQPage/FAQTAB_Accordion_item/ChevronSVG.svg?react";

export const FAQTab_Accordion_item: ({
  header,
  ...rest
}: {
  [x: string]: string;
  header: string;
}) => JSX.Element = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <ChevronSVG className={styles.faqTab__accordion__item__chevron} />
      </>
    }
    className={({ isEnter }) =>
      `${styles.faqTab__accordion__item} ${isEnter ? styles.faqTab__accordion__item__active : ""}`
    }
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.faqTab__accordion__item__btn} ${isEnter ? styles.faqTab__accordion__item__btnExpanded : ""}`,
    }}
    contentProps={{
      className: ({ isEnter }) =>
        `${styles.faqTab__accordion__itemContent} ${isEnter ? styles.faqTab__accordion__itemContent__active : ""}`,
    }}
    panelProps={{ className: styles.faqTab__accordion__itemPanel }}
    headingProps={{
      className: ({ isEnter }) =>
        `${styles.faqTab__accordion__itemHeading} Page__SirineWrapper ${isEnter ? styles.faqTab__accordion__itemHeading__active : ""}`,
    }}
  />
);
