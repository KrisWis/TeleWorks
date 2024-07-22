import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import {
  ButtonProps,
  ButtonTypes,
} from "@/shared/ui-kit/Button/model/Button__types";
import {
  CatalogItemProps,
  CatalogItemTags,
} from "../../../../entities/CatalogPage_entities/CatalogItem/model/CatalogItem__types";
import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";

export const catalog__items: CatalogItemProps[] = [
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: "124 827",
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: "11 048.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 59.2,
    title: "Санкт-Петербург | Моска Новости",
    desc: "ЦА30 , плбные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2],
    stars: 4.2,
    subscribersAmount: "12427",
    menPercent: 30,
    womenPercent: 70,
    ThousandsViews: 2.7,
    ER: 25.7,
    CPV: 0.5,
    price: "1108.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург",
    desc: "ЦА 30 , способные.",
    tags: [CatalogItemTags.TAG2],
    stars: 2.0,
    subscribersAmount: "124 827",
    menPercent: 80,
    womenPercent: 20,
    ThousandsViews: 3.7,
    ER: 2.37,
    CPV: 0.3,
    price: "118.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости2",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: "124 827",
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: "11 048.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости3",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: "124 827",
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: "11 048.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости4",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: "124 827",
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: "11 048.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости5",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: "124 827",
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: "11 048.94",
  },
  {
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости6",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: "124 827",
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: "11 048.94",
  },
];

export const catalog__categories: ButtonProps[] = [
  {
    text: "Реклама",
    type: ButtonTypes.RED,
  },

  {
    text: "Услуги",
    type: ButtonTypes.WHITE,
  },

  {
    text: "Каналы",
    type: ButtonTypes.BLUE,
  },

  {
    text: "Готовые предложения",
    type: ButtonTypes.BLACK,
  },
];

export const catalog__filters: Array<Select_Option[]> = [
  [
    { value: "Формат", label: "Формат" },
    { value: "Формат2", label: "Формат2" },
    { value: "Формат3", label: "Формат3" },
  ],

  [
    { value: "Диапозоны", label: "Диапозоны" },
    { value: "Диапозоны2", label: "Диапозоны2" },
    { value: "Диапозоны3", label: "Диапозоны3" },
  ],

  [
    { value: "Скрыть каналы", label: "Скрыть каналы" },
    { value: "Скрыть каналы2", label: "Скрыть каналы2" },
    { value: "Скрыть каналы3", label: "Скрыть каналы3" },
  ],
];
