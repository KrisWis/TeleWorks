import { URL_PART } from "@/shared/const/app";
import { OrderInfoProps } from "@/entities/Global_entities/OrderInfo";
import { ProjectInfoPackNames } from "@/shared/const/project";

export const orderInfoData: Omit<OrderInfoProps, "orderStatus"> = {
  orderImgURL: `${URL_PART}/global/images/portfolioCase__example_img.png`,
  orderTitle: "Дизайн инфографики для маркетплейсов.",
  orderPackName: ProjectInfoPackNames.BASE,
  extraServices: ["Исходный файл", "1 вариант дизайна", "Ресайз"],
  extra: ["Доп. редакции"],
  PerformerUsername: "@Bayandinrd",
  orderDate: "23.06.2024   15:34",
  multiplier: 1,
  price: 3000,
};
