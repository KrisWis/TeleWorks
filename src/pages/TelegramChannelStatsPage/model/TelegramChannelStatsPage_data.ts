import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { GeoLanguageTypes } from "@/shared/ui-kit/GeoLanguageBlock/model/GeoLanguageBlock_types";
import { InterpolationLineChartType } from "@/shared/ui-kit/InterpolationLineChart";
import { TelegramChannelStatsProps } from "@/widgets/TelegramChannelStatsPage_widgets/TelegramChannelStats/model/TelegramChannelStats_types";

export const interpolationLineChartData: InterpolationLineChartType = {
  Репосты: [
    {
      category: "Неделя",
      dataSets: [
        {
          id: 1,
          label: "12 Агв",
          value: 0,
        },
        {
          id: 2,
          label: "13 Авг",
          value: 600,
        },
        {
          id: 3,
          label: "14 Авг",
          value: 800,
        },
        {
          id: 4,
          label: "15 Авг",
          value: 1100,
        },
        {
          id: 5,
          label: "16 Авг",
          value: 1600,
        },
        {
          id: 6,
          label: "17 Авг",
          value: 2000,
        },
        {
          id: 7,
          label: "18 Авг",
          value: 2000,
        },
        {
          id: 8,
          label: "19 Авг",
          value: 2000,
        },
        {
          id: 9,
          label: "20 Авг",
          value: 2300,
        },
      ],
    },

    {
      category: "Месяц",
      dataSets: [
        {
          id: 1,
          label: "12 Агв",
          value: 0,
        },
        {
          id: 2,
          label: "13 Авг",
          value: 200,
        },
        {
          id: 3,
          label: "14 Авг",
          value: 300,
        },
        {
          id: 4,
          label: "15 Авг",
          value: 100,
        },
        {
          id: 5,
          label: "16 Авг",
          value: 800,
        },
        {
          id: 6,
          label: "17 Авг",
          value: 1000,
        },
        {
          id: 7,
          label: "18 Авг",
          value: 2000,
        },
        {
          id: 8,
          label: "19 Авг",
          value: 2400,
        },
        {
          id: 9,
          label: "20 Авг",
          value: 2300,
        },
      ],
    },

    {
      category: "Год",
      dataSets: [
        {
          id: 1,
          label: "12 Агв",
          value: 200,
        },
        {
          id: 2,
          label: "13 Авг",
          value: 600,
        },
        {
          id: 3,
          label: "14 Авг",
          value: 800,
        },
        {
          id: 4,
          label: "15 Авг",
          value: 1500,
        },
        {
          id: 5,
          label: "16 Авг",
          value: 1600,
        },
        {
          id: 6,
          label: "17 Авг",
          value: 2200,
        },
        {
          id: 7,
          label: "18 Авг",
          value: 2500,
        },
        {
          id: 8,
          label: "19 Авг",
          value: 2000,
        },
        {
          id: 9,
          label: "20 Авг",
          value: 2900,
        },
      ],
    },

    {
      category: "Все время",
      dataSets: [
        {
          id: 1,
          label: "12 дек",
          value: 0,
        },
        {
          id: 2,
          label: "12 апр",
          value: 2000,
        },

        {
          id: 2,
          label: "12 янв",
          value: 4000,
        },
      ],
    },
  ],

  Комментарии: [
    {
      category: "Неделя",
      dataSets: [
        {
          id: 1,
          label: "12 Агв",
          value: 0,
        },
        {
          id: 2,
          label: "13 Авг",
          value: 300,
        },
        {
          id: 3,
          label: "14 Авг",
          value: 800,
        },
        {
          id: 4,
          label: "15 Авг",
          value: 1500,
        },
        {
          id: 5,
          label: "16 Авг",
          value: 1600,
        },
        {
          id: 6,
          label: "17 Авг",
          value: 2000,
        },
        {
          id: 7,
          label: "18 Авг",
          value: 2000,
        },
        {
          id: 8,
          label: "19 Авг",
          value: 2100,
        },
        {
          id: 9,
          label: "20 Авг",
          value: 2300,
        },
      ],
    },

    {
      category: "Месяц",
      dataSets: [
        {
          id: 1,
          label: "12 Агв",
          value: 200,
        },
        {
          id: 2,
          label: "13 Авг",
          value: 200,
        },
        {
          id: 3,
          label: "14 Авг",
          value: 300,
        },
        {
          id: 4,
          label: "15 Авг",
          value: 6500,
        },
        {
          id: 5,
          label: "16 Авг",
          value: 800,
        },
        {
          id: 6,
          label: "17 Авг",
          value: 1000,
        },
        {
          id: 7,
          label: "18 Авг",
          value: 6000,
        },
        {
          id: 8,
          label: "19 Авг",
          value: 2400,
        },
        {
          id: 9,
          label: "20 Авг",
          value: 8700,
        },
      ],
    },

    {
      category: "Год",
      dataSets: [
        {
          id: 1,
          label: "12 Агв",
          value: 1200,
        },
        {
          id: 2,
          label: "13 Авг",
          value: 600,
        },
        {
          id: 3,
          label: "14 Авг",
          value: 800,
        },
        {
          id: 4,
          label: "15 Авг",
          value: 1500,
        },
        {
          id: 5,
          label: "16 Авг",
          value: 1600,
        },
        {
          id: 6,
          label: "17 Авг",
          value: 2900,
        },
        {
          id: 7,
          label: "18 Авг",
          value: 2500,
        },
        {
          id: 8,
          label: "19 Авг",
          value: 2000,
        },
        {
          id: 9,
          label: "20 Авг",
          value: 29000,
        },
      ],
    },

    {
      category: "Все время",
      dataSets: [
        {
          id: 1,
          label: "12 дек",
          value: 0,
        },
        {
          id: 2,
          label: "12 апр",
          value: 2500,
        },

        {
          id: 2,
          label: "12 янв",
          value: 7000,
        },
      ],
    },
  ],
};

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
