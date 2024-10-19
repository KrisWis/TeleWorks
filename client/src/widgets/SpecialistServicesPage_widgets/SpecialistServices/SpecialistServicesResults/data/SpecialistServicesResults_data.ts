import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";
import { URL_PART } from "@/app/layouts/BaseLayout/model/BaseLayout__data";
import { ServicesItem } from "@/entities/Global_entities/ProjectItem/model/ProjectItem_types";

export const sortSelectItems: Select_Option[] = [
  {
    value: "Рекомендуемые",
    label: "Рекомендуемые",
  },

  {
    value: "Рекомендуемые2",
    label: "Рекомендуемые2",
  },

  {
    value: "Рекомендуемые3",
    label: "Рекомендуемые3",
  },
];

export const servicesItems: ServicesItem[] = [
  {
    id: 1,
    imgURLs: [`${URL_PART}/global/images/serviceExample_img.png`],
    title: "Инфографика для маркетплейсов.",
    TeleWorksChoice: true,
    price: "от 3 000 ₽",
    authorName: "Роман Б.",
    authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
    authorRank: "высокий рейтинг",
    authorRating: "5.0",
    authorReviewsAmount: 256,
    authorIsOnline: true,
    TopOfWeek: false,
  },

  {
    id: 2,
    imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
    title: "Инфографика для маркетплейсов2.",
    TeleWorksChoice: true,
    price: "от 3 000 ₽",
    authorName: "Роман Б.",
    authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
    authorRank: "высокий рейтинг",
    authorRating: "5.0",
    authorReviewsAmount: 256,
    authorIsOnline: true,
    TopOfWeek: false,
  },

  {
    id: 3,
    imgURLs: [
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
    ],
    title: "Инфографика для маркетплейсов3.",
    TeleWorksChoice: true,
    price: "от 3 000 ₽",
    authorName: "Роман Б.",
    authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
    authorRank: "высокий рейтинг",
    authorRating: "5.0",
    authorReviewsAmount: 256,
    authorIsOnline: false,
    TopOfWeek: false,
  },

  {
    id: 4,
    imgURLs: [
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
    ],
    title: "Инфографика для маркетплейсов4.",
    TeleWorksChoice: true,
    price: "от 3 000 ₽",
    authorName: "Роман Б.",
    authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
    authorRank: "высокий рейтинг",
    authorRating: "5.0",
    authorReviewsAmount: 256,
    authorIsOnline: true,
    TopOfWeek: false,
  },

  {
    id: 5,
    imgURLs: [
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
    ],
    title: "Инфографика для маркетплейсов5.",
    TeleWorksChoice: true,
    price: "от 3 000 ₽",
    authorName: "Роман Б.",
    authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
    authorRank: "высокий рейтинг",
    authorRating: "5.0",
    authorReviewsAmount: 256,
    authorIsOnline: true,
    TopOfWeek: false,
  },

  {
    id: 6,
    imgURLs: [
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
      `${URL_PART}/global/images/serviceExample_img.png`,
      `${URL_PART}/global/images/serviceExample_img_2.png`,
    ],
    title: "Инфографика для маркетплейсов6.",
    TeleWorksChoice: true,
    price: "от 3 000 ₽",
    authorName: "Роман Б.",
    authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
    authorRank: "высокий рейтинг",
    authorRating: "5.0",
    authorReviewsAmount: 256,
    authorIsOnline: true,
    TopOfWeek: false,
  },
];
