import { AuthorCardProps } from "@/entities/ProjectPage_entities/ProjectInfo_entities/AuthorCard/model/AuthorCard_types";
import { ProjectInfoPacks } from "@/features";

export interface ProjectInfoProps {
  projectTitle: string;
  favouriteAmount: number;
  breadcrumbs: string[];
  author: AuthorCardProps;
  ProjectInfo_packs: ProjectInfoPacks;
  ProjectTags: string[];
}
