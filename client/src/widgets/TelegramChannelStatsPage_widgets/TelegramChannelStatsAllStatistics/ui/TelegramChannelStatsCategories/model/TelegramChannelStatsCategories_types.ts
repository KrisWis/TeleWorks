export interface TelegramChannelStatsCategory {
  title: TelegramChannelStatsCategories;
  icon: React.ReactNode;
  block: React.ReactNode;
}

export enum TelegramChannelStatsCategories {
  SUMMARY = "Сводная",
  INVOLVEMENT = "Вовлеченность подписчиков",
  VIEWS_ANALYZE = "Анализ просмотров",
  SUBSCRIBERS_ATTRACTION = "Привлечения подписчиков",
  ADS_EFFECTIVITY = "Эффективность рекламы",
}
