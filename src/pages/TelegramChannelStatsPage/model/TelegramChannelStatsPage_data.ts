import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";
import { TelegramChannelStatsProps } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats/model/TelegramChannelStats_types";

export const telegramChannelStatsData: TelegramChannelStatsProps = {
  rating: 0,
  imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
  title: "Квартира мечты!",
  category: "Интерьер и строительство",
  favouritesAmount: 134,
  desc: "Пример описание чем занимается канала и прочие Например: Поможем найти вашу квартиру мечты по самым низким ценнам, на рынке уже более 10 лет. Помогли найти квартиру 30млн клиентам...",
  geoLanguage: GeoLanguageTypes.RUSSIAN,
  age: "1 год.",
  postsAmount: 1573,
  channelLink: "/channel",
};
