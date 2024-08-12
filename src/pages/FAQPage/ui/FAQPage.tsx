import "./FAQPage.scss";
import "@/shared/main.scss";
import { useEffect, useState } from "react";
import { memo } from "react";
import { FAQHeader, FAQTabs } from "@/widgets/FAQPage_widgets/FAQHeader";
import { FAQPageContext } from "../model/FAQPageContext";
import { FAQTab } from "@/widgets/FAQPage_widgets/FAQTab";

export const FAQPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("FAQ");
  }, []);

  const [ActiveFAQTab, setActiveFAQTab] = useState<FAQTabs>(FAQTabs.GENERAL);

  return (
    <FAQPageContext.Provider
      value={{
        ActiveFAQTab,
        setActiveFAQTab,
      }}
    >
      <main className="FAQ__main">
        <div className="padding">
          <FAQHeader />
          <FAQTab />
        </div>
      </main>
    </FAQPageContext.Provider>
  );
});
