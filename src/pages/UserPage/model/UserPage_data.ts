import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { ServicesItem } from "@/entities/Global_entities/ProjectItem/model/ProjectItem_types";
import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";
import { UserProfessions } from "@/entities/UserPage_entities/UserAbout_entities/UserCard";
import { PortfolioCaseProps } from "@/shared/ui-kit/PortfolioCase";
import { ReviewsPanelProps } from "@/widgets/Global_widgets/ReviewsPanel/model/ReviewsPanel_types";
import { UserAboutProps } from "@/widgets/UserPage_widgets/UserAbout/model/UserAbout_types";

export const userAbout: UserAboutProps = {
  HeaderImgURL: `${URL_PART}/global/images/userHeader_img.png`,
  userName: "@Bayandinrd",
  userProfession: UserProfessions.GRAPHIC_DESIGNER,
  authorResponseTime: "1 час",
  authorAbout: `Ты ищешь дизайнера, который сможет воплотить в жизнь твои 
креативные идеи? Тогда ты попал по адресу! Я готов помочь тебе создать 
уникальный и привлекательный дизайн, который точно заинтересует 
твою целевую аудиторию.
    
Уважаю ваше и свое время поэтому ответ на ваш заказ будет получен
максимально быстро, со своей стороны также гарантирую дойти до 
финальной версии дизайна:)
    
Работы можете увидеть в профиле.`,
  authorSkills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  authorImgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
  authorName: "Роман Б.",
  online: true,
  TeleWorksChoice: true,
  reputation: 5.0,
  ordersAmount: 256,
  positiveReviews: 200,
  negativeReviews: 1,
};

export const UserPortfolioCategories: string[] = [
  "Все рубрики",
  "Веб и мобильный дизайн",
  "Маркетплейсы и соцсети",
  "Полиграфия",
  "Логотип",
  "Полиграфия2",
  "Логотип2",
];

export const UserPortfolioCases: PortfolioCaseProps[] = [
  {
    imgURL: `${URL_PART}/global/images/serviceExample_img.png`,
    caseName: "Название кейса 1",
    views: 300,
  },

  {
    imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
    caseName: "Название кейса 2",
    views: 500,
  },

  {
    imgURL: `${URL_PART}/global/images/serviceExample_img_2.png`,
    caseName: "Название кейса 3",
    views: 1233,
  },
];

export const UserProjectsItems: ServicesItem[] = [
  {
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

  {
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
];

export const userReviewsProps: ReviewsPanelProps = {
  mark: 5.0,
  reviewsAmount: 384,
  fiveStarsProgress: 100,
  fourStarsProgress: 80,
  threeStarsProgress: 0,
  twoStarsProgress: 0,
  oneStarsProgress: 0,
};

export const userReviews_items: Reviews__itemProps[] = [
  {
    author: "inan_ivanov",
    extraInfo: "Доп. информация в виде стажа",
    date: "16.07.2024",
    text: "Быстрое выполнение задачи, ответственный!",
    stars: 5.0,
    imgURL: `${URL_PART}/ProfilePage/images/other/default-user.png`,
    project: {
      imgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
      title: "UI/UX Дизайн сайта",
      price: 15000,
    },
  },
];
