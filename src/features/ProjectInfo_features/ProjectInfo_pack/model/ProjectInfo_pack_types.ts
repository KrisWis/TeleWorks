export enum ProjectInfoPackNames {
  BASE = "Базовый",
  STANDARD = "Стандарт",
  PREMIUM = "Премиум",
}

export interface ProjectInfoPackContent {
  price: number;
  desc: string;
  deadline: string;
  revisionsAmount: number;
  activeServices: string[];
  disactiveServices?: string[];
}

export type ProjectInfoPacks = {
  [key in ProjectInfoPackNames]: ProjectInfoPackContent;
};

export interface ProjectInfoPackProps {
  packs: ProjectInfoPacks;
}
