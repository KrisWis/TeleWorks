import { ProjectInfoPackNames } from "@/shared/const/project";

export interface ExtraService {
  title: string;
  price: number;
}

export interface OrderPreview {
  projectTitle: string;
  multiplier: number;
  projectPrice: number;
  extraServices: string[];
  deadline: string;
  editionsAmount: number;
  extra: ExtraService[];
  packName: ProjectInfoPackNames;
  projectImgURL: string;
}

export interface OrderPreviewProps {
  FinalPrice: number;
}
