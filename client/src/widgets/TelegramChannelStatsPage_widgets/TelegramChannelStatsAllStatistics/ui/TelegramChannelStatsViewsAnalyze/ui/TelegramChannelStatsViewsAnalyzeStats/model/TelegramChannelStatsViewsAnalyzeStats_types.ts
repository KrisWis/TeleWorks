import { Hours } from "@/shared/types";
import { TelegramChannelStatsViewsAnalyzeFormats } from "../../../model/TelegramChannelStatsViewsAnalyze_types";

export interface TelegramChannelStatsViewsAnalyzeFormatHour {
  hour: Hours;
  percentIncrease: number;
  viewsIncrease: number;
}

export interface TelegramChannelStatsViewsAnalyzeFormat {
  postID: number;
  postDate: Date;
  viewsInThousandsAmount: number;
  subscribersIncreaseAmount: number;
  graphicImgURL: string;
  hoursStats: TelegramChannelStatsViewsAnalyzeFormatHour[];
}

export type TelegramChannelStatsViewsAnalyzeFormatData = {
  [key in TelegramChannelStatsViewsAnalyzeFormats]: TelegramChannelStatsViewsAnalyzeFormat[];
};

export interface TelegramChannelStatsViewsAnalyzeStatsProps {
  formatsData: TelegramChannelStatsViewsAnalyzeFormatData;
  currentFormat: TelegramChannelStatsViewsAnalyzeFormats;
}
