import { ProjectItemViewTypes } from "../const/project";
import { ProjectInfoPackNames } from "../const/project";
import { AuthorCardProps } from "./user";
import { authorRank } from "./global";

export interface ProjectExtraService {
  title: string;
  desc: string;
  price: number;
  scalability: boolean;
  amount?: number;
  selected: boolean;
}

export type ProjectExtraServices = {
  [key in string]: ProjectExtraService;
};

export interface CheckoutOrderPack {
  packPrice: number;
  editionsAmounts: number;
  extraServices: ProjectExtraServices;
}

export type CheckoutOrderPacks = {
  [key in ProjectInfoPackNames]: CheckoutOrderPack;
};
export interface ProjectItemProps {
  servicesItem: ServicesItem;
  viewType: ProjectItemViewTypes;
  onProjectPage?: boolean;
}
export interface ServicesItem {
  id: number;
  imgURLs: string[];
  title: string;
  TeleWorksChoice: boolean;
  price: string;
  authorName: string;
  authorImgURL: string;
  authorRank: authorRank;
  authorRating: string;
  authorReviewsAmount: number;
  authorIsOnline: boolean;
  TopOfWeek: boolean;
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
export interface ProjectInfoProps {
  projectTitle: string;
  favouriteAmount: number;
  breadcrumbs: string[];
  author: AuthorCardProps;
  ProjectInfo_packs: ProjectInfoPacks;
  ProjectTags: string[];
}
export type TelegramChannelStatsChangeType = "+" | "-";
