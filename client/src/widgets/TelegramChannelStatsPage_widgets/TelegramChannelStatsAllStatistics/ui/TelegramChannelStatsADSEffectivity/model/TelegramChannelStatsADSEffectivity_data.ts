import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";
import { TelegramChannelStatsADSEffectivityStat } from "../ui/TelegramChannelStatsADSEffectivityStats/model/TelegramChannelStatsADSEffectivityStats_types";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";

export const telegramChannelStatsADSEffectivitySortSelectedOptions: Select_Option[] =
  [
    { value: "Cортировка1", label: "Cортировка1" },
    { value: "Cортировка2", label: "Cортировка2" },
    { value: "Cортировка3", label: "Cортировка3" },
  ];

export const telegramChannelStatsADSEffectivityStatItems: TelegramChannelStatsADSEffectivityStat[] =
  [
    {
      avatarImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      channelName: "Название канала",
      channelCategory: "Новости и СМИ",
      channelDate: new Date(2024, 8, 18, 23, 43),
      hoursInTop: 1,
      viewsAmount: 442222,
      subscribersChangeAmount: 244,
      changeType: "+",
    },

    {
      avatarImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      channelName: "Название канала2",
      channelCategory: "Новости и СМИ",
      channelDate: new Date(2024, 8, 18, 23, 43),
      hoursInTop: 1,
      viewsAmount: 442222,
      subscribersChangeAmount: 244,
      changeType: "+",
    },

    {
      avatarImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      channelName: "Название канала3",
      channelCategory: "Интерьер и строительство",
      channelDate: new Date(2024, 8, 18, 23, 43),
      hoursInTop: 4,
      viewsAmount: 4421222,
      subscribersChangeAmount: 2244,
      changeType: "+",
    },

    {
      avatarImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      channelName: "Название канала4",
      channelCategory: "Новости и СМИ",
      channelDate: new Date(2024, 8, 18, 23, 43),
      hoursInTop: 1,
      viewsAmount: 442222,
      subscribersChangeAmount: 244,
      changeType: "-",
    },

    {
      avatarImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      channelName: "Название канала5",
      channelCategory: "Новости и СМИ",
      channelDate: new Date(2024, 10, 18, 21, 43),
      hoursInTop: 12,
      viewsAmount: 442222,
      subscribersChangeAmount: 244,
      changeType: "+",
    },
  ];
