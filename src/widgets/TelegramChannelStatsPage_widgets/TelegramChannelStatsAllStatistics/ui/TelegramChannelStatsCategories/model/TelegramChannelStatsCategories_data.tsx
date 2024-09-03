import {
  TelegramChannelStatsCategories,
  TelegramChannelStatsCategory,
} from "./TelegramChannelStatsCategories_types";
import SummarySVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelStats/SummarySVG.svg?react";
import InvolvementSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelStats/InvolvementSVG.svg?react";
import ViewsAnalyzeSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelStats/ViewsAnalyzeSVG.svg?react";
import SubscribersAttractionSVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelStats/SubscribersAttractionSVG.svg?react";
import ADSEffectivitySVG from "@/shared/assets/icons/TelegramChannelStatsPage/ProfileChannelStats/ADSEffectivitySVG.svg?react";
import { TelegramChannelStatsSummary } from "../../TelegramChannelStatsSummary";
import { TelegramChannelStatsSubscribersAttraction } from "../../TelegramChannelStatsSubscribersAttraction";
import { TelegramChannelStatsViewsAnalyze } from "../../TelegramChannelStatsViewsAnalyze";
import { TelegramChannelStatsInvolvement } from "../../TelegramChannelStatsInvolvement";
import { TelegramChannelStatsADSEffectivity } from "../../TelegramChannelStatsADSEffectivity";

export const telegramChannelStatsCategories: TelegramChannelStatsCategory[] = [
  {
    icon: <SummarySVG />,
    title: TelegramChannelStatsCategories.SUMMARY,
    block: <TelegramChannelStatsSummary />,
  },

  {
    icon: <SubscribersAttractionSVG />,
    title: TelegramChannelStatsCategories.SUBSCRIBERS_ATTRACTION,
    block: <TelegramChannelStatsSubscribersAttraction />,
  },

  {
    icon: <ViewsAnalyzeSVG />,
    title: TelegramChannelStatsCategories.VIEWS_ANALYZE,
    block: <TelegramChannelStatsViewsAnalyze />,
  },

  {
    icon: <InvolvementSVG />,
    title: TelegramChannelStatsCategories.INVOLVEMENT,
    block: <TelegramChannelStatsInvolvement />,
  },

  {
    icon: <ADSEffectivitySVG />,
    title: TelegramChannelStatsCategories.ADS_EFFECTIVITY,
    block: <TelegramChannelStatsADSEffectivity />,
  },
];
