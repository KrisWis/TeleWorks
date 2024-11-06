import { UserProfessions } from "@/shared/const/user";
import { AuthorCardProps } from "@/shared/types/user";

export interface UserCardProps extends Omit<AuthorCardProps, "orderInQueue"> {
  userName: `@${string}`;
  userProfession: UserProfessions;
  authorResponseTime: string;
  className?: string;
}
