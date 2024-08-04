import { AuthorCardProps } from "@/entities/ProjectPage_entities/ProjectInfo/AuthorCard/model/AuthorCard_types";
import { ProjectInfoPacks } from "@/features/ProjectInfo_features/ProjectInfo_pack";

export interface ProjectInfoProps {
  projectTitle: string;
  favouriteAmount: number;
  breadcrumbs: string[];
  author: AuthorCardProps;
  ProjectInfo_packs: ProjectInfoPacks;
  ProjectTags: string[];
}
