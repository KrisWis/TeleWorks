import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { UserProfessions } from "@/entities/UserPage_entities/UserAbout_entities/UserCard";
import { PortfolioCaseProps } from "@/shared/ui-kit/PortfolioCase";
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
