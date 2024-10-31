import {
  ButtonProps,
  ButtonTypes,
} from "@/shared/ui-kit/Button/model/Button__types";
import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";

export const catalog__categories: ButtonProps[] = [
  {
    text: "Реклама",
    type: ButtonTypes.RED,
  },

  {
    text: "Услуги",
    type: ButtonTypes.WHITE,
  },

  {
    text: "Каналы",
    type: ButtonTypes.BLUE,
  },

  {
    text: "Готовые предложения",
    type: ButtonTypes.BLACK,
  },
];

export const catalog__filters: Array<Select_Option[]> = [
  [
    { value: "Формат", label: "Формат" },
    { value: "Формат2", label: "Формат2" },
    { value: "Формат3", label: "Формат3" },
  ],

  [
    { value: "Диапозоны", label: "Диапозоны" },
    { value: "Диапозоны2", label: "Диапозоны2" },
    { value: "Диапозоны3", label: "Диапозоны3" },
  ],

  [
    { value: "Скрыть каналы", label: "Скрыть каналы" },
    { value: "Скрыть каналы2", label: "Скрыть каналы2" },
    { value: "Скрыть каналы3", label: "Скрыть каналы3" },
  ],
];
