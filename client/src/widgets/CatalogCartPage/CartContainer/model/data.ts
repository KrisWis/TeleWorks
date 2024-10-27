import { URL_PART } from "@/app";
import {
  CatalogItemInterface,
  CatalogItemTags,
} from "@/entities/CatalogPage_entities/CatalogItem";
import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";

export const cartContainerSelectedOptions: Select_Option[] = [
  { value: "Сортировка", label: "Сортировка" },
  { value: "Сортировка2", label: "Сортировка2" },
  { value: "Сортировка3", label: "Сортировка3" },
];

export const cartItems: CatalogItemInterface[] = [
  {
    id: 0,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: 124827,
    menPercent: 50,
    womenPercent: 50,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: 11048.94,
  },

  {
    id: 1,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: 124827,
    menPercent: 30,
    womenPercent: 70,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: 1108.94,
  },

  {
    id: 2,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 59.2,
    title: "Санкт-Петербург | Новости",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2],
    stars: 3.2,
    subscribersAmount: 12827,
    menPercent: 20,
    womenPercent: 80,
    ThousandsViews: 1.7,
    ER: 25.37,
    CPV: 0.35,
    price: 108.94,
  },

  {
    id: 3,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: 124827,
    menPercent: 80,
    womenPercent: 20,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: 1108.94,
  },

  {
    id: 4,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости",
    desc: "ЦА 30 , платежеспособные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2, CatalogItemTags.TAG3],
    stars: 5.0,
    subscribersAmount: 124827,
    menPercent: 80,
    womenPercent: 20,
    ThousandsViews: 31.7,
    ER: 25.37,
    CPV: 0.35,
    price: 110008.94,
  },
];
