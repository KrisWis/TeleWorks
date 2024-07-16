import { EarnInSteps__item_props } from "@/entities/InternalPage__entities/EarnInSteps_entities/EarnInSteps__item/model/EarnInSteps__item_types";

export type EarnInSteps__item_type = Omit<EarnInSteps__item_props, "index">;

export const EarnInSteps_items: EarnInSteps__item_type[] = [
  {
    title: "Добавьте канал в каталог",
    desc: "Модерация займет до 48 часов, после чего ваш канал увидят заказчики",
  },

  {
    title: "Получайте заказы и размещайте посты",
    desc: "Оповещения о новых заявках приходят на email и в Telegram-бота, позволяя вам оперативно приступать к проектам",
  },

  {
    title: "Получаете оплату",
    desc: "Выплаты происходят автоматически, без необходимости вывода средств вручную.",
  },
];
