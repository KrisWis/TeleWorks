import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { Stats__item__props } from "@/entities/Stats__widget/Stats__item/model/Stats__item__types";

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
    graphic_imgURL: `${URL_PART}/images/Stats/Graphics__1.svg`,
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
    graphic_imgURL: `${URL_PART}/images/Stats/Graphics__2.svg`,
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
    graphic_imgURL: `${URL_PART}/images/Stats/Graphics__3.svg`,
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
    graphic_imgURL: `${URL_PART}/images/Stats/Graphics__1.svg`,
  },
];
