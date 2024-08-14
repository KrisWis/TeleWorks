import "./TurnkeyWebsitesPage.scss";
import "@/shared/main.scss";
import { TurnkeyWebsitesPageInfo } from "@/widgets/TurnkeyWebsitesPage_widgets/TurnkeyWebsitesPageInfo";
import { useEffect } from "react";
import { memo } from "react";

export const TurnkeyWebsitesPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector("html")!.classList.add("TurnkeyWebsitesPage");
  }, []);

  return (
    <main className="Page TurnkeyWebsitesPage__main">
      <div className="padding">
        <TurnkeyWebsitesPageInfo />
      </div>
    </main>
  );
});
