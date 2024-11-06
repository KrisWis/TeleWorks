import { memo, useState } from "react";
import { FAQPageContext } from "..";
import { FAQHeader, FAQTabs } from "@/widgets/FAQPage_widgets/FAQHeader";
import { FAQTab } from "@/widgets/FAQPage_widgets/FAQTab";
import { AskQuestion } from "@/shared/ui-kit/AskQuestion";
import { Flex } from "@/shared/lib/Stack";

export const FAQPageContainer: React.FC = memo((): React.JSX.Element => {
  // Создание стейта для контекста
  const [ActiveFAQTab, setActiveFAQTab] = useState<FAQTabs>(FAQTabs.GENERAL);
  return (
    <FAQPageContext.Provider
      value={{
        ActiveFAQTab,
        setActiveFAQTab,
      }}
    >
      <main className="Page FAQ__main">
        <div className="padding">
          <FAQHeader />
          <Flex max direction="column" gap="20">
            <FAQTab />
            <AskQuestion />
          </Flex>
        </div>
      </main>
    </FAQPageContext.Provider>
  );
});
