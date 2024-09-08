import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";

export const categoriesItems: string[] = [
  "Дизайн",
  "Программирование",
  "Копирайтинг",
  "Видео и анимация",
  "Музыка и аудио",
  "Цифровая музыка",
];

export const servicesFilters: Array<Select_Option[]> = [
  [
    { value: "Услуга включает", label: "Услуга включает" },
    { value: "Услуга включает2", label: "Услуга включает2" },
    { value: "Услуга включает3", label: "Услуга включает3" },
  ],

  [
    { value: "Активность продавца", label: "Активность продавца" },
    { value: "Активность продавца2", label: "Активность продавца2" },
    { value: "Активность продавца3", label: "Активность продавца3" },
  ],

  [
    { value: "Срок исполнения", label: "Срок исполнения" },
    { value: "Срок исполнения2", label: "Срок исполнения2" },
    { value: "Срок исполнения3", label: "Срок исполнения3" },
  ],
];
