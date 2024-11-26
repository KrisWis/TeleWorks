import { URL_PART } from "@/shared/const/app";
import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item";
import { Similar_channels__itemProps } from "@/entities/TelegramChannelPage_entities/Similar_channels__item";
import { ReviewsPanelProps } from "@/entities/Global_entities/ReviewsPanel";

export const channelReviews: ReviewsPanelProps = {
  mark: 5.0,
  reviewsAmount: 384,
  fiveStarsProgress: 100,
  fourStarsProgress: 80,
  threeStarsProgress: 0,
  twoStarsProgress: 0,
  oneStarsProgress: 0,
};

export const Reviews_items: Reviews__itemProps[] = [
  {
    author: "inan_ivanov",
    extraInfo: "Доп. информация в виде стажа",
    date: "16.07.2024",
    text: "Быстрое выполнение задачи, ответственный!",
    stars: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
  },

  {
    author: "inan_ivanov",
    extraInfo: "Доп. информация в виде стажа",
    date: "16.07.2024",
    text: "Быстрое выполнение задачи, ответственный!",
    stars: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
  },
];

export const Similar_channels__items: Similar_channels__itemProps[] = [
  {
    rating: 509.2,
    starsAmount: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    title: "Квартира мечты!",
    category: "Интерьер и строительство",
    subscribersAmount: "205K",
    views: "104K",
    ER: 26.7,
    CPV: 1.39,
    price: 12048.94,
  },

  {
    rating: 509.2,
    starsAmount: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    title: "Квартира мечты5!",
    category: "Интерьер и строительство",
    subscribersAmount: "205K",
    views: "104K",
    ER: 26.7,
    CPV: 1.39,
    price: 12048.94,
  },

  {
    rating: 509.2,
    starsAmount: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    title: "Квартира мечты4!",
    category: "Интерьер и строительство",
    subscribersAmount: "205K",
    views: "104K",
    ER: 26.7,
    CPV: 1.39,
    price: 12048.94,
  },

  {
    rating: 509.2,
    starsAmount: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    title: "Квартира мечты!",
    category: "Интерьер и строительство",
    subscribersAmount: "205K",
    views: "104K",
    ER: 26.7,
    CPV: 1.39,
    price: 12048.94,
  },

  {
    rating: 509.2,
    starsAmount: 5.0,
    imgURL: `${URL_PART}/TelegramChannelPage/images/other/default-user.png`,
    title: "Квартира мечты2!",
    category: "Интерьер и строительство",
    subscribersAmount: "205K",
    views: "104K",
    ER: 26.7,
    CPV: 1.39,
    price: 12048.94,
  },
];
