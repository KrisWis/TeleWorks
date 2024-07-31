import { URL_PART } from "@/app/layouts/model/BaseLayout__data";
import { UserProfessions } from "@/entities/UserPage_entities/UserAbout_entities/UserCard";
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
