import { MarkdownTextareaTabs } from "./MarkdownTextarea_types";
import OrderedListSVG from "@/shared/assets/icons/Shared/MarkdownTextarea/OrderedListSVG.svg?react";
import styles from "../ui/MarkdownTextarea.module.scss";

export const markdownTextareaTabs: MarkdownTextareaTabs = {
  bold: "B",
  italic: "/",
  ordered_list: (
    <OrderedListSVG className={styles.markdownTextarea__tab__orderedList} />
  ),
};
