import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { Channel_reviewsProps } from "@/widgets/Global_widgets/Channel_reviews/model/Channel_reviews_types";
import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";

export const channelReviews: Channel_reviewsProps = {
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
    imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
  },

  {
    author: "inan_ivanov",
    extraInfo: "Доп. информация в виде стажа",
    date: "16.07.2024",
    text: "Быстрое выполнение задачи, ответственный!",
    stars: 5.0,
    imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
  },
];
