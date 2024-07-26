import { ProjectInfoPacks } from "@/features";

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
  },
};
