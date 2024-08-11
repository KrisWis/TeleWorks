import { FAQTabs } from "@/widgets/FAQPage_widgets/FAQHeader";
import { createContext, useState } from "react";

export interface FAQPageContext {
  ActiveFAQTab: FAQTabs;
  setActiveFAQTab: React.Dispatch<React.SetStateAction<FAQTabs>>;
}

export const FAQPageContext = createContext<FAQPageContext>({
  ActiveFAQTab: FAQTabs.GENERAL,
  setActiveFAQTab: useState,
});
