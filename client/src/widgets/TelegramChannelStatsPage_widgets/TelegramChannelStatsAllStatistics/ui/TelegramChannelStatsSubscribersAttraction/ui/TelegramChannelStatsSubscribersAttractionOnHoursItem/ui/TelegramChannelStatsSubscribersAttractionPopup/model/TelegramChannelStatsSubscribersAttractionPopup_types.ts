import { telegramChannelsCategories } from "@/app/layouts/BaseLayout/model/BaseLayout__types";

export interface TelegramChannelStatsSubscribersAttractionPopup {
  channelName: string;
  channelCategory: telegramChannelsCategories;
  channelLink: string;
  channelImgURL: string;
  channelPostImgURL: string;
  desc: string;
  viewsAmount: number;
  repostsAmount: number;
  commentsAmount: number;
}

export interface TelegramChannelStatsSubscribersAttractionPopupProps {
  channel: TelegramChannelStatsSubscribersAttractionPopup;
  CustomSetModalAppear: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
