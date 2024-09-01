import {
  telegramChannelStatsCategories,
  TelegramChannelStatsCategories,
} from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStatsAllStatistics/ui/TelegramChannelStatsCategories";
import { createContext, useState } from "react";

export interface TelegramChannelStatsPageContext {
  selectedCategory: TelegramChannelStatsCategories;
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<TelegramChannelStatsCategories>
  >;
}

export const TelegramChannelStatsPageContext =
  createContext<TelegramChannelStatsPageContext>({
    selectedCategory: telegramChannelStatsCategories[0].title,
    setSelectedCategory: useState,
  });
