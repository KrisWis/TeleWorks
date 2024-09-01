export interface TelegramChannelStatsCategory {
  title: TelegramChannelStatsCategories;
  icon: React.ReactNode;
}

export enum TelegramChannelStatsCategories {
  SUMMARY = "Сводная",
  INVOLVEMENT = "Привлечения подписчиков",
  VIEWS_ANALYZE = "Анализ просмотров",
  SUBSCRIBERS_ATTRACTION = "Вовлеченность подписчиков",
  ADS_EFFECTIVITY = "Эффективность рекламы",
}
