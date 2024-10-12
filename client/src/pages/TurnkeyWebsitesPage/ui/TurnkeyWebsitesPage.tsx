import { TurnkeyWebsitesPageHowWeWorks } from "@/widgets/TurnkeyWebsitesPage_widgets/TurnkeyWebsitesPageHowWeWorks";
import "./TurnkeyWebsitesPage.scss";
import "@/shared/main.scss";
import { TurnkeyWebsitesPageInfo } from "@/widgets/TurnkeyWebsitesPage_widgets/TurnkeyWebsitesPageInfo";
import { useEffect } from "react";
import { memo } from "react";
import { TurnkeyWebsitesPageOurCases } from "@/widgets/TurnkeyWebsitesPage_widgets/TurnkeyWebsitesPageOurCases";
import { TurnkeyWebsitesPageFAQ } from "@/widgets/TurnkeyWebsitesPage_widgets/TurnkeyWebsitesPageFAQ";

export const TurnkeyWebsitesPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("TurnkeyWebsitesPage");
    document.title = `TeleWorks | Сайт под ключ`;
  }, []);

  return (
    <main className="Page TurnkeyWebsitesPage__main">
      <div className="padding">
        <TurnkeyWebsitesPageInfo />
        <TurnkeyWebsitesPageHowWeWorks />
        <TurnkeyWebsitesPageOurCases />
        <TurnkeyWebsitesPageFAQ />
      </div>
    </main>
  );
});
