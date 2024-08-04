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
  selected: boolean;
}

export interface ProjectInfoPackContent {
  price: number;
  desc: string;
  deadline: string;
  editionsAmount: number;
  ProjectActiveServices: string[];
  disProjectActiveServices?: string[];
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
  ProjectActiveServices: string[];
  disProjectActiveServices?: string[];
  extraServices?: ProjectExtraService[];
  descForCheckoutOrder?: string;
}
