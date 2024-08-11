import { FAQTabs } from "../../FAQHeader";

export interface FAQTabItem {
  title: string;
  desc: string;
}

export type FAQTabsInterface = {
  [tab in FAQTabs]: FAQTabItem[];
};
