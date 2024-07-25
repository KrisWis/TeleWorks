import { memo, useEffect } from "react";
import "./InternalPage.scss";
import "@/shared/main.scss";
import {
  ChannelsExamples,
  EarnInSteps,
  FAQ,
  Footer,
  Header,
  MainSection,
  MarketPlace,
  OpenAdvantages,
  ReceiveNotifications,
} from "@/widgets";

export const InternalPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("InternalPage");
  }, []);

  return (
    <>
      <Header />
      <main className="Internal__main">
        <div className="padding">
          <MainSection />
          <ChannelsExamples />
        </div>

        <OpenAdvantages />

        <div className="padding">
          <EarnInSteps />
          <MarketPlace />
          <FAQ />
        </div>
      </main>

      <ReceiveNotifications />
      <Footer />
    </>
  );
});
