export enum HeaderViews {
  TELEGRAM_CHANNEL_STATS = "telegram_channels_stats",
  BLOG = "blog",
  KIND_DEEDS = "kind_deeds",
}

export interface HeaderProps {
  view?: HeaderViews;
}
