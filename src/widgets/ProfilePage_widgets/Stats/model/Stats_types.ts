import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { Stats__item__props } from "@/entities/ProfilePage_entities/Stats__item/model/Stats__item__types";

export const Stats__items: Stats__item__props[] = [
  {
    amount: "8 214",
    amounts__subscribers: [
      {
        prefix: "+",
        number: 21,
      },
      {
        prefix: "+",
        number: 1121,
      },
      {
        prefix: "-",
        number: 101,
      },
    ],
    stats: [
      {
        stat: "сегодня",
      },
      {
        stat: "за неделю",
      },
      {
        stat: "за месяц",
      },
    ],
    caption: "ПОДПИСЧИКИ",
    graphic_imgURL: `${URL_PART}/ProfilePage/images/Stats/Graphics__1.svg`,
  },

  {
    amount: "2 995",
    amounts: ["30.5%", "25%"],
    stats: [
      {
        stat: "ERR",
      },
      {
        stat: "ERR",
        postfix: "24",
      },
    ],
    caption: "СР.ОХВАТ ПУБЛИКАЦИИ",
    graphic_imgURL: `${URL_PART}/ProfilePage/images/Stats/Graphics__2.svg`,
  },

  {
    amount: "52.2",
    amounts: ["81", "105", "0"],
    stats: [
      {
        stat: "уп.каналов",
      },
      {
        stat: "упоминаний",
      },
      {
        stat: "репостов",
      },
    ],
    caption: "ИНДЕКС ЦИТИРОВАНИЯ",
    graphic_imgURL: `${URL_PART}/ProfilePage/images/Stats/Graphics__3.svg`,
  },

  {
    amount: "2 200",
    amounts: ["1.4k", "2.2k", "2.7k"],
    stats: [
      {
        stat: "за 12 часов",
      },
      {
        stat: "за 24 часа",
      },
      {
        stat: "за 48 часов",
      },
    ],
    caption: "СР.ОХВАТ РЕКАЛМ. ПУБЛИКАЦИИ",
    graphic_imgURL: `${URL_PART}/ProfilePage/images/Stats/Graphics__1.svg`,
  },

  // {
  //   amount: "2 200",
  //   amounts: ["207.5k", "302.1k", "393.6k", "207.5k", "302.1k", "393.6k"],
  //   stats: [
  //     {
  //       stat: "за 12 часов",
  //     },
  //     {
  //       stat: "за 24 часа",
  //     },
  //     {
  //       stat: "за 48 часов",
  //     },
  //     {
  //       stat: "бусты",
  //     },
  //     {
  //       stat: "реакции",
  //     },
  //     {
  //       stat: "репосты",
  //     },
  //   ],
  //   caption: "СТОРИС",
  // },

  // {
  //   amount: "0,85%",
  //   amounts: ["207.5k", "302.1k", "393.6k"],
  //   stats: [
  //     {
  //       stat: "репосты",
  //     },
  //     {
  //       stat: "комментарии",
  //     },
  //     {
  //       stat: "реакции",
  //     },
  //   ],
  //   caption: "ВОВЛЕЧЕННОСТЬ ПОДПИСЧИКОВ",
  //   graphicChart: [
  //     {
  //       id: 1,
  //       label: "12 Агв",
  //       value: 0,
  //     },
  //     {
  //       id: 2,
  //       label: "13 Авг",
  //       value: 200,
  //     },
  //     {
  //       id: 3,
  //       label: "14 Авг",
  //       value: 150,
  //     },
  //     {
  //       id: 4,
  //       label: "15 Авг",
  //       value: 400,
  //     },
  //     {
  //       id: 5,
  //       label: "16 Авг",
  //       value: 300,
  //     },
  //     {
  //       id: 6,
  //       label: "17 Авг",
  //       value: 700,
  //     },
  //     {
  //       id: 7,
  //       label: "18 Авг",
  //       value: 550,
  //     },
  //     {
  //       id: 8,
  //       label: "19 Авг",
  //       value: 570,
  //     },
  //     {
  //       id: 9,
  //       label: "20 Авг",
  //       value: 540,
  //     },
  //     {
  //       id: 10,
  //       label: "21 Авг",
  //       value: 570,
  //     },
  //   ],
  // },
];
