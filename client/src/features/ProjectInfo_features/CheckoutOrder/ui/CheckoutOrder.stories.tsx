import type { Meta, StoryObj } from "@storybook/react";
import { CheckoutOrder } from "./CheckoutOrder";
import React, { useState } from "react";
import { DynamicModuleLoader } from "@/shared/ui-kit/DynamicModuleLoader/ui/DynamicModuleLoader";
import { checkoutOrderReducer } from "../model/slice/CheckoutOrderSlice";
import { ProjectInfoPack } from "../../ProjectInfo_pack/model/ProjectInfo_pack_types";
import { ProjectExtraService } from "@/shared/types/project";
import { ProjectInfoPackNames } from "@/shared/const/project";

const packExample: ProjectInfoPack = {
  packName: ProjectInfoPackNames.BASE,
  price: 3000,
  desc: "1 концепция + файлы PNG и JPG + исходники в формате PSD",
  deadline: "1 день",
  editionsAmount: 3,
  ProjectActiveServices: ["Исходный файл", "1 вариант дизайна", "Ресайз"],
  disProjectActiveServices: ["Правки", "Текст"],
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
};

const ExtraServicesExample: ProjectExtraService[] = [
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
];

const CheckOutOrderWithReducer: React.FC = () => (
  <DynamicModuleLoader reducers={{ checkoutOrderReducer }}>
    <CheckoutOrder
      pack={packExample}
      ExtraServices={ExtraServicesExample}
      setExtraServices={useState}
    />
  </DynamicModuleLoader>
);

const meta = {
  title: "Modals/CheckoutOrder",
  component: CheckOutOrderWithReducer,
} satisfies Meta<typeof CheckoutOrder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
