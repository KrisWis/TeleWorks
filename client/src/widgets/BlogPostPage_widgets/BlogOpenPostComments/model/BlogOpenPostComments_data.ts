import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";
import { BlogOpenPostCommentsUser } from "./BlogOpenPostComments_types";
import { URL_PART } from "@/shared/const/app";

export const blogOpenPostCommentsSortSelectItems: Select_Option[] = [
  {
    value: "Популярные",
    label: "Популярные",
  },

  {
    value: "Рекомендуемые",
    label: "Рекомендуемые",
  },

  {
    value: "Рекомендуемые3",
    label: "Рекомендуемые3",
  },
];

export const blogOpenPostCommentsUser: BlogOpenPostCommentsUser = {
  imgURL: `${URL_PART}/global/images/serviceExample_authorImg.png`,
  title: "Иван Иванов",
  category: "Рейтинг или специализация",
};
