import { UserCardProps } from "@/entities/UserPage_entities/UserAbout_entities/UserCard/model/UserCard_types";

export interface UserAboutProps extends UserCardProps {
  HeaderImgURL: string;
  authorAbout: string;
  authorSkills: string[];
}
