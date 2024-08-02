import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { ProjectItemProps } from "@/entities/Global_entities/ProjectItem/model/ProjectItem_types";
import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";
import { AuthorCardProps } from "@/entities/ProjectPage_entities/ProjectInfo_entities/AuthorCard/model/AuthorCard_types";
import { ProjectInfoPacks } from "@/features/ProjectInfo_features/ProjectInfo_pack";
import { ReviewsPanelProps } from "@/widgets/Global_widgets/ReviewsPanel/model/ReviewsPanel_types";
import { ProjectInfoProps } from "@/widgets/ProjectPage_widgets/ProjectInfo/model/ProjectInfo_types";
import { ProjectItemViewTypes } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices";

export const ProjectInfo_packs: ProjectInfoPacks = {
  Базовый: {
    price: 3000,
    desc: "1 концепция + файлы PNG и JPG + исходники в формате PSD",
    deadline: "1 день",
    editionsAmount: 3,
    activeServices: ["Исходный файл", "1 вариант дизайна", "Ресайз"],
    disactiveServices: ["Правки", "Текст"],
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
    activeServices: ["Исходный файл", "1 вариант дизайна", "Ресайз", "Правки"],
    disactiveServices: ["Текст"],
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
    activeServices: [
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },
];

export const SimilarProjectsItems: ProjectItemProps[] = [
  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },

  {
    servicesItem: {
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
  },
];
