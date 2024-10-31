import { ProjectInfoPacks } from "@/shared/types/project";
import { ProjectExtraService } from "@/shared/types/project";
import { ProjectInfoPackNames } from "@/shared/const/project";

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
