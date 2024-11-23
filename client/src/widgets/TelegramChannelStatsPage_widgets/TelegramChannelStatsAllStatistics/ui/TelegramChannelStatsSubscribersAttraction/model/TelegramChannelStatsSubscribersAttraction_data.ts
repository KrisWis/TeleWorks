import { InterpolationLineChartType } from "@/shared/ui-kit/InterpolationLineChart";
import {
  TelegramChannelStatsSubscribersAttractionOnDaysItem,
  TelegramChannelStatsSubscribersAttractionOnHours,
} from "./TelegramChannelStatsSubscribersAttraction_types";
import { URL_PART } from "@/shared/const/app";

export const subscribersGrowthGraphic: InterpolationLineChartType = {
  Подписчики: [
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
};

export const telegramChannelStatsSubscribersAttractionOnDaysData: TelegramChannelStatsSubscribersAttractionOnDaysItem[] =
  [
    {
      date: new Date(2024, 8, 19),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 20),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "+",
    },

    {
      date: new Date(2024, 8, 21),
      subscribersAmount: 222222,
      changesAmount: 0,
    },

    {
      date: new Date(2024, 8, 22),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 23),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 24),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 25),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 26),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 27),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },

    {
      date: new Date(2024, 8, 28),
      subscribersAmount: 222222,
      changesAmount: 356,
      changeType: "-",
    },
  ];

export const telegramChannelStatsSubscribersAttractionOnHoursData: TelegramChannelStatsSubscribersAttractionOnHours =
  {
    date: new Date(2024, 7, 19),
    items: [
      {
        hour: 23,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
        referencesChannels: [
          {
            channelName: "Название канала",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Новости и СМИ",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `В России растёт (https://govoritmoskva.ru
/news/422088/?ysclid=m01b54wo6i378989388) 
количество пациентов с клинической депрессией 

В таком состоянии человек думает, что ему просто
грустно, тревожно, поплачет и вроде справляется. 
Психологи призывают не бояться обращаться за 
помощью, в т.ч. в благотворительные организации. 
https://t.me/moscowmap`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },

          {
            channelName: "Название канала2",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `В России растёт (https://govoritmoskva.ru
/news/422088/?ysclid=m01b54wo6i378989388) 
количество пациентов с клинической депрессией 

В таком состоянии человек думает, что ему просто
грустно, тревожно, поплачет и вроде справляется. 
Психологи призывают не бояться обращаться за 
помощью, в т.ч. в благотворительные организации. 
https://t.me/moscowmap`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },

          {
            channelName: "Название канала3",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `Описание`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },

          {
            channelName: "Название канала4",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `Описание`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },

          {
            channelName: "Название канала5",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `Описание`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },
          {
            channelName: "Название канала6",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `Описание`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },
          {
            channelName: "Название канала7",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `Описание`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },
        ],
      },

      {
        hour: 22,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 25,
        changeType: "+",
      },

      {
        hour: 21,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 300,
        changeType: "-",
      },

      {
        hour: 20,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },

      {
        hour: 19,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },

      {
        hour: 18,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 50,
        changeType: "-",
      },

      {
        hour: 17,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 132,
        changeType: "+",
      },

      {
        hour: 16,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 22,
        changeType: "+",
        referencesChannels: [
          {
            channelName: "Название канала",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Новости и СМИ",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `В России растёт (https://govoritmoskva.ru
/news/422088/?ysclid=m01b54wo6i378989388) 
количество пациентов с клинической депрессией 

В таком состоянии человек думает, что ему просто
грустно, тревожно, поплачет и вроде справляется. 
Психологи призывают не бояться обращаться за 
помощью, в т.ч. в благотворительные организации. 
https://t.me/moscowmap`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },

          {
            channelName: "Название канала2",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `В России растёт (https://govoritmoskva.ru
/news/422088/?ysclid=m01b54wo6i378989388) 
количество пациентов с клинической депрессией 

В таком состоянии человек думает, что ему просто
грустно, тревожно, поплачет и вроде справляется. 
Психологи призывают не бояться обращаться за 
помощью, в т.ч. в благотворительные организации. 
https://t.me/moscowmap`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },

          {
            channelName: "Название канала3",
            viewsAmountInThousands: 24.7,
            subscribersIncreaseAmount: 35,
            category: "Интерьер и строительство",
            channelImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
            postImgURL: `${URL_PART}/global/images/serviceExample_img_big.png`,
            desc: `Описание`,
            postViewsAmount: 11222,
            postRepostsAmount: 11222,
            postCommentsAmount: 11222,
            channelLink: "/",
          },
        ],
      },

      {
        hour: 15,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },

      {
        hour: 14,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },

      {
        hour: 13,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 12,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 11,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 10,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 9,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 8,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 7,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 6,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 5,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 4,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 3,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 2,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 1,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
      {
        hour: 0,
        referencesAmount: 30,
        repostsAmount: 1,
        changesAmount: 0,
      },
    ],
  };
