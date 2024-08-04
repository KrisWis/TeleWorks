import { AuthorCardProps } from "@/entities/ProjectPage_entities/ProjectInfo/AuthorCard";

export enum UserProfessions {
  GRAPHIC_DESIGNER = "Графический дизайнер",
}

export interface UserCardProps extends Omit<AuthorCardProps, "orderInQueue"> {
  userName: `@${string}`;
  userProfession: UserProfessions;
  authorResponseTime: string;
  className?: string;
}
