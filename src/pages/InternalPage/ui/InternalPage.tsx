import { useEffect } from "react";
import "./InternalPage.scss";
import "@/shared/main.scss";
import { ChannelsExamples, MainSection, OpenAdvantages } from "@/widgets";

export const InternalPage: React.FC = (): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("InternalPage");
  }, []);

  return (
    <main className="Internal__main">
      <div className="padding">
        <MainSection />
        <ChannelsExamples />
      </div>

      <OpenAdvantages />
    </main>
  );
};
