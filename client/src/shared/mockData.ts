import { URL_PART } from "./const/app";
import {
  AuthorCardProps,
  Reviews__itemProps,
  ReviewsPanelProps,
} from "./types/user";
import { ProjectInfoPacks, ProjectInfoProps } from "./types/project";
import { ServicesItem } from "./types/project";
import { ProjectItemProps } from "./types/project";
import {
  BlogPopularPostProps,
  BlogPostCommentProps,
  BlogPostProps,
} from "./types/blog";
import { ProjectItemViewTypes } from "./const/project";
import { CatalogItemInterface, CatalogItemTags } from "./types/catalog";

import { InterpolationLineChartType } from "./ui-kit/InterpolationLineChart";

export const catalog__items: CatalogItemInterface[] = [
  {
    id: 1,
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
    id: 2,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 59.2,
    title: "Санкт-Петербург | Моска Новости",
    desc: "ЦА30 , плбные.",
    tags: [CatalogItemTags.TAG1, CatalogItemTags.TAG2],
    stars: 4.2,
    subscribersAmount: 124827,
    menPercent: 30,
    womenPercent: 70,
    ThousandsViews: 2.7,
    ER: 25.7,
    CPV: 0.5,
    price: 1108.94,
  },
  {
    id: 3,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург",
    desc: "ЦА 30 , способные.",
    tags: [CatalogItemTags.TAG2],
    stars: 2.0,
    subscribersAmount: 124827,
    menPercent: 80,
    womenPercent: 20,
    ThousandsViews: 3.7,
    ER: 2.37,
    CPV: 0.3,
    price: 118.94,
  },
  {
    id: 4,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости2",
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
    id: 5,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости3",
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
    id: 6,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости4",
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
    id: 7,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости5",
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
    id: 8,
    imgURL: `${URL_PART}/CatalogPage/images/CatalogPage__item__img.png`,
    ratingNumber: 509.2,
    title: "Санкт-Петербург | Питер Новости6",
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
];
export const blogCommentsExample: Omit<BlogPostCommentProps, "isAnswer">[] = [
  {
    commentInfo: {
      id: 0,
      authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      authorName: "@nickname",
      createdDate: new Date(2024, 8, 2, 22, 40),
      text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.

    Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
      likesAmount: 12,
      dislikesAmount: 1,
    },

    answers: [
      {
        commentInfo: {
          id: 1,
          authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
          authorName: "@nickname",
          createdDate: new Date(2024, 8, 2, 22, 40),
          text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.

Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
          likesAmount: 12,
          dislikesAmount: 1,
        },
      },

      {
        commentInfo: {
          id: 2,
          authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
          authorName: "@nickname",
          createdDate: new Date(2024, 8, 2, 22, 40),
          text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
          likesAmount: 12,
          dislikesAmount: 1,
        },
      },

      {
        commentInfo: {
          id: 3,
          authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
          authorName: "@nickname",
          createdDate: new Date(2024, 8, 2, 22, 40),
          text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
          likesAmount: 12,
          dislikesAmount: 1,
        },
      },

      {
        commentInfo: {
          id: 4,
          authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
          authorName: "@nickname",
          createdDate: new Date(2024, 8, 2, 22, 40),
          text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
          likesAmount: 12,
          dislikesAmount: 1,
        },

        answers: [
          {
            commentInfo: {
              id: 5,
              authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
              authorName: "@nickname",
              createdDate: new Date(2024, 8, 2, 22, 40),
              text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
              likesAmount: 12,
              dislikesAmount: 1,
            },

            answers: [
              {
                commentInfo: {
                  id: 6,
                  authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
                  authorName: "@nickname",
                  createdDate: new Date(2024, 8, 2, 22, 40),
                  text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
                  likesAmount: 12,
                  dislikesAmount: 1,
                },
              },
              {
                commentInfo: {
                  id: 7,
                  authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
                  authorName: "@nickname",
                  createdDate: new Date(2024, 8, 2, 22, 40),
                  text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
                  likesAmount: 12,
                  dislikesAmount: 1,
                },
              },
            ],
          },
        ],
      },
    ],
  },

  {
    commentInfo: {
      id: 8,
      authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      authorName: "@nickname",
      createdDate: new Date(2024, 8, 2, 22, 40),
      text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
      likesAmount: 12,
      dislikesAmount: 1,
    },
  },

  {
    commentInfo: {
      id: 9,
      authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      authorName: "@nickname",
      createdDate: new Date(2024, 8, 2, 22, 40),
      text: `Данный пост предоставляет полезную информацию о том, как купить телеграм-канал в 2024 году. Я нашел его содержание интересным и информативным. Он предлагает шаг за шагом руководство по поиску, контакту с владельцем, сделке и развитию канала.
Пост также включает в себя важные советы о том, как определить свои цели и исследовать рынок перед покупкой. Я оценил рекомендации о том, как создать интересный и полезный контент, привлечь новых подписчиков и поддерживать активность аудитории.`,
      likesAmount: 12,
      dislikesAmount: 1,
    },
  },
];
export const blogPostItems: BlogPostProps[] = [
  {
    id: 1,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },

  {
    id: 2,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },

  {
    id: 3,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },
  {
    id: 4,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },

  {
    id: 5,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },

  {
    id: 6,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },

  {
    id: 7,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },

  {
    id: 8,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    category: "Фриланс",
    dateOfCreation: new Date(2024, 8, 1),
    title:
      "Заголовок, как дизайнеру привлекать новых покупателей, как продать дизайн на крупный чек?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
  },
];

export const blogPopularPosts: BlogPopularPostProps[] = [
  {
    id: 0,
    title: "Название/заголовок Как выставить канал на продажу?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
  },

  {
    id: 1,
    title: "Название/заголовок Как выставить канал на продажу?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
  },

  {
    id: 2,
    title: "Название/заголовок Как выставить канал на продажу?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
  },

  {
    id: 3,
    title: "Название/заголовок Как выставить канал на продажу?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
  },

  {
    id: 4,
    title: "Название/заголовок Как выставить канал на продажу?",
    likesAmount: 12,
    commentsAmount: 12,
    bookmarksAmount: 11,
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
  },
];
export const telegramChannelStatsInvolvementERGraphic: InterpolationLineChartType =
  {
    ER: [
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

export const telegramChannelStatsInvolvementAverageAmountGraphic: InterpolationLineChartType =
  {
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
export const ProjectInfo_packs: ProjectInfoPacks = {
  Базовый: {
    price: 3000,
    desc: "1 концепция + файлы PNG и JPG + исходники в формате PSD",
    deadline: "1 день",
    editionsAmount: 3,
    ProjectActiveServices: ["Исходный файл", "1 вариант дизайна", "Ресайз"],
    disProjectActiveServices: ["Правки", "Текст"],
    descForCheckoutOrder:
      "Базовый — для стартапов.  Я разработаю ваш креативный типографский логотип.",
    extraServices: [
      {
        title: "Быстрое выполнение",
        desc: "Выполнение проекта за 1 день",
        price: 3000,
        scalability: false,
        selected: false,
      },

      {
        title: "Дополнительные редакции",
        desc: "Добавьте дополнительную версию, которую продавец предоставит после выполнения.",
        price: 3000,
        scalability: true,
        selected: false,
      },

      {
        title: "Исходный файл",
        desc: "Получите файл в формате PSD для далнейший редакции",
        price: 3000,
        scalability: false,
        selected: false,
      },
    ],
  },

  Стандарт: {
    price: 6000,
    desc: "3 концепции + файлы PNG и JPG + исходники в формате PSD",
    deadline: "3 день",
    editionsAmount: 5,
    ProjectActiveServices: [
      "Исходный файл",
      "1 вариант дизайна",
      "Ресайз",
      "Правки",
    ],
    disProjectActiveServices: ["Текст"],
    descForCheckoutOrder:
      "Стандарт — для стартапов.  Я разработаю ваш креативный типографский логотип.",
    extraServices: [
      {
        title: "Быстрое выполнение",
        desc: "Выполнение проекта за 3 дня",
        price: 5000,
        scalability: false,
        selected: false,
      },

      {
        title: "Дополнительные редакции",
        desc: "Добавьте дополнительную версию, которую продавец предоставит после выполнения.",
        price: 4000,
        scalability: true,
        selected: false,
      },

      {
        title: "Исходный файл",
        desc: "Получите файл в формате PSD для далнейший редакции",
        price: 4000,
        scalability: false,
        selected: false,
      },
    ],
  },

  Премиум: {
    price: 10000,
    desc: "5 концепций + файлы PNG и JPG + исходники в формате PSD",
    deadline: "5 день",
    editionsAmount: 10,
    ProjectActiveServices: [
      "Исходный файл",
      "1 вариант дизайна",
      "Ресайз",
      "Правки",
      "Текст",
    ],
    descForCheckoutOrder:
      "Премиум — для стартапов.  Я разработаю ваш креативный типографский логотип.",
    extraServices: [
      {
        title: "Быстрое выполнение",
        desc: "Выполнение проекта за 5 дней",
        price: 10000,
        scalability: false,
        selected: false,
      },

      {
        title: "Дополнительные редакции",
        desc: "Добавьте дополнительную версию, которую продавец предоставит после выполнения.",
        price: 7000,
        scalability: true,
        selected: false,
      },

      {
        title: "Исходный файл",
        desc: "Получите файл в формате PSD для далнейший редакции",
        price: 8000,
        scalability: false,
        selected: false,
      },
    ],
  },
};

export const ProjectInfoAuthor: AuthorCardProps = {
  authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
  authorName: "Роман Б.",
  TeleWorksChoice: true,
  online: true,
  reputation: 5.0,
  ordersAmount: 256,
  positiveReviews: 200,
  negativeReviews: 1,
  orderInQueue: 1,
};

export const ProjectInfoData: ProjectInfoProps = {
  projectTitle: "Инфографика для маркетплейсов.",
  favouriteAmount: 545,
  breadcrumbs: ["Дизайн", "Инфографика"],
  author: ProjectInfoAuthor,
  ProjectInfo_packs: ProjectInfo_packs,
  ProjectTags: ["Инфографика", "Карточка товара", "Willdberries"],
};

export const reviewsPanelProps: ReviewsPanelProps = {
  mark: 5.0,
  reviewsAmount: 384,
  fiveStarsProgress: 100,
  fourStarsProgress: 80,
  threeStarsProgress: 0,
  twoStarsProgress: 0,
  oneStarsProgress: 0,
};

export const ProjectReviews_items: Reviews__itemProps[] = [
  {
    author: "inan_ivanov",
    extraInfo: "Доп. информация в виде стажа",
    date: "16.07.2024",
    text: "Быстрое выполнение задачи, ответственный!",
    stars: 5.0,
    imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
  },
];

export const OtherProjectsItems: ProjectItemProps[] = [
  {
    servicesItem: {
      id: 0,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img.png`],
      title: "Инфографика для маркетплейсов.",
      TeleWorksChoice: false,
      price: "от 3 000 ₽",
      authorName: "Роман Б.",
      authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      authorRank: "высокий рейтинг",
      authorRating: "5.0",
      authorReviewsAmount: 256,
      authorIsOnline: true,
      TopOfWeek: true,
    },
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 1,
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 2,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 3,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 4,
      imgURLs: [`${URL_PART}/global/images/portfolioCase__example_img.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 5,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },
];

export const SimilarProjectsItems: ProjectItemProps[] = [
  {
    servicesItem: {
      id: 0,
      imgURLs: [`${URL_PART}/global/images/portfolioCase__example_img.png`],
      title: "Инфографика для маркетплейсов.",
      TeleWorksChoice: false,
      price: "от 3 000 ₽",
      authorName: "Роман Б.",
      authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
      authorRank: "высокий рейтинг",
      authorRating: "5.0",
      authorReviewsAmount: 256,
      authorIsOnline: true,
      TopOfWeek: true,
    },
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 1,
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 2,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 3,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 4,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },

  {
    servicesItem: {
      id: 5,
      imgURLs: [`${URL_PART}/global/images/serviceExample_img_2.png`],
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
    viewType: ProjectItemViewTypes.COLUMN,
    onProjectPage: true,
  },
];
