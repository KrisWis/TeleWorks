import { ReactElement } from "react";

export enum HeaderServicesCategories {
  CATALOGS = "Каталоги",
  OTHER = "Другое",
  USEFUL = "Полезное"
}

export interface HeaderServicesItem {
  icon: ReactElement;
  title: string;
  link: string;
}

export type HeaderServicesItems = {
  [category in HeaderServicesCategories]: HeaderServicesItem[];
};

export enum HeaderMenuCategories {
  ADMIN = "Админ",
  ADVERTISERS = "Рекламодатели",
  FINANCES = "Финансы",
  INFORMATION = "Информация",
}

export interface HeaderMenuItem {
  icon: ReactElement;
  title: string;
  link: string;
}

export type HeaderMenuItems = {
  [category in HeaderMenuCategories]: HeaderMenuItem[];
};
