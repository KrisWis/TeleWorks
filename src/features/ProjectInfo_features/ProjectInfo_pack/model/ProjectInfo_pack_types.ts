export enum ProjectInfoPackNames {
  BASE = "Базовый",
  STANDARD = "Стандарт",
  PREMIUM = "Премиум",
}

export interface ProjectExtraService {
  title: string;
  desc: string;
  price: number;
  scalability: boolean;
  amount?: number;
}

export interface ProjectInfoPackContent {
  price: number;
  desc: string;
  deadline: string;
  editionsAmount: number;
  activeServices: string[];
  disactiveServices?: string[];
  descForCheckoutOrder: string;
  extraServices?: ProjectExtraService[];
}

export type ProjectInfoPacks = {
  [key in ProjectInfoPackNames]: ProjectInfoPackContent;
};

export interface ProjectInfoPackProps {
  packs: ProjectInfoPacks;
}

export interface ProjectInfoPack {
  packName: ProjectInfoPackNames;
  price: number;
  desc: string;
  deadline: string;
  editionsAmount: number;
  activeServices: string[];
  disactiveServices?: string[];
  extraServices?: ProjectExtraService[];
}
