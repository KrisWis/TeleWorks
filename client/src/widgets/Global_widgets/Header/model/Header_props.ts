export enum HeaderViews {
  TELEGRAM_CHANNEL_STATS = "Статистика",
  BLOG = "Блог",
  KIND_DEEDS = "Добрые дела",
  CHANNELS = "Продажа каналов",
  FREELANCE = "Фриланс",
}

export interface HeaderProps {
  view?: HeaderViews;
}
