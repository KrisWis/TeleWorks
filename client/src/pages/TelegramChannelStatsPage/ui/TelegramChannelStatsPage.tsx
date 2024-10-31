import "./TelegramChannelStatsPage.scss";
import "@/shared/main.scss";
import { useEffect } from "react";
import { memo } from "react";
import { TelegramChannelStatsPageMain } from "@/app/layouts/BaseLayout/ui/pageWrappers/TelegramChannelStatsPageMain";

export const TelegramChannelStatsPage: React.FC = memo(
  (): React.JSX.Element => {
    useEffect(() => {
      document.querySelector("html")!.classList.add("TelegramChannelStatsPage");
      document.title = `TeleWorks | Название канала`;
    }, []);

    return <TelegramChannelStatsPageMain />;
  }
);
