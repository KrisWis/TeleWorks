import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";

export const TelegramChannelStatsPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document.querySelector("html")!.classList.add("TelegramChannelStatsPage");
    }, []);

    return (
      <main className="Page TelegramChannelStatsPage__main">
        <div className="padding">
          <></>
        </div>
      </main>
    );
  }
);
