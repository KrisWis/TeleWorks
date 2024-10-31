import { ProjectInfoPackNames } from "@/shared/const/project";
import { OrderPreview } from "./OrderPreview_types";
import { URL_PART } from "@/shared/const/app";

export const orderData: OrderPreview = {
  packName: ProjectInfoPackNames.BASE,
  projectTitle: "Дизайн инфографики для маркетплейсов.",
  multiplier: 1,
  projectPrice: 3000,
  extraServices: ["Исходный файл", "1 вариант дизайна", "Ресайз"],
  deadline: "1 день",
  editionsAmount: 3,
  extra: [
    {
      title: "Доп. редакции",
      price: 3000,
    },
  ],
  projectImgURL: `${URL_PART}/global/images/serviceExample_img.png`,
};
