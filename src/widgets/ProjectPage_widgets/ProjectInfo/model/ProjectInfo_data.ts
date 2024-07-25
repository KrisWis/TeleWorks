import { ProjectInfoPacks } from "@/features";

export const ProjectInfo_packs: ProjectInfoPacks = {
  Базовый: {
    price: 3000,
    desc: "1 концепция + файлы PNG и JPG + исходники в формате PSD",
    deadline: "1 день",
    revisionsAmount: 3,
    activeServices: ["Исходный файл", "1 вариант дизайна", "Ресайз"],
    disactiveServices: ["Правки", "Текст"],
  },

  Стандарт: {
    price: 6000,
    desc: "3 концепции + файлы PNG и JPG + исходники в формате PSD",
    deadline: "3 день",
    revisionsAmount: 5,
    activeServices: ["Исходный файл", "1 вариант дизайна", "Ресайз", "Правки"],
    disactiveServices: ["Текст"],
  },

  Премиум: {
    price: 10000,
    desc: "5 концепций + файлы PNG и JPG + исходники в формате PSD",
    deadline: "5 день",
    revisionsAmount: 10,
    activeServices: [
      "Исходный файл",
      "1 вариант дизайна",
      "Ресайз",
      "Правки",
      "Текст",
    ],
  },
};
