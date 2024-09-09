import { createContext, useState } from "react";

export interface TelegramChannelStatsPageContext {
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const TelegramChannelStatsPageContext =
  createContext<TelegramChannelStatsPageContext>({
    selectedCategoryIndex: 0,
    setSelectedCategoryIndex: useState,
  });
