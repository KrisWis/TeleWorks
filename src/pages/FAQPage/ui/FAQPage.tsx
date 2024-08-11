import "./FAQPage.scss";
import "@/shared/main.scss";
import { useEffect, useState } from "react";
import { Header } from "@/widgets/Global_widgets/Header";
import { Footer } from "@/widgets/Global_widgets/Footer";
import { memo } from "react";
import { FAQHeader, FAQTabs } from "@/widgets/FAQPage_widgets/FAQHeader";
import { FAQPageContext } from "../model/FAQPageContext";
import { FAQTab } from "@/widgets/FAQPage_widgets/FAQTab";

export const FAQPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("FAQ");
  }, []);

  const [ActiveFAQTab, setActiveFAQTab] = useState<FAQTabs>(FAQTabs.GENERAL);

  // TODO: Добавить последний виджет и прогнать хуки

  return (
    <FAQPageContext.Provider
      value={{
        ActiveFAQTab,
        setActiveFAQTab,
      }}
    >
      <Header />
      <main className="FAQ__main">
        <div className="padding">
          <FAQHeader />
          <FAQTab />
        </div>
      </main>
      <Footer />
    </FAQPageContext.Provider>
  );
});
