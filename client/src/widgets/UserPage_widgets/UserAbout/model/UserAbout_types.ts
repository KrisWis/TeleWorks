import { UserCardProps } from "@/entities/UserPage_entities/UserCard";

export interface UserAboutProps extends UserCardProps {
  HeaderImgURL: string;
  authorAbout: string;
  authorSkills: string[];
}
