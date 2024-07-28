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
