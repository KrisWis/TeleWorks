export enum HeaderViews {
  TELEGRAM_CHANNEL_STATS = "telegram_channels_stats",
  BLOG = "blog",
}

export interface HeaderProps {
  view?: HeaderViews;
}
