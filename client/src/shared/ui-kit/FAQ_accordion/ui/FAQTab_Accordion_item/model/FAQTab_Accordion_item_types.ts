import { FAQTabs } from "@/../FAQPage_widgets/FAQHeader";

export interface FAQTabItem {
  title: string;
  desc: string;
}

export type FAQTabsInterface = {
  [tab in FAQTabs]: FAQTabItem[];
};
