import { ServicesViewTypes } from "@/widgets/SpecialistServicesPage_widgets/SpecialistServices/SpecialistServicesResults/data/SpecialistServicesResults_types";

export type authorRank =
  | "низкий рейтинг"
  | "средний рейтинг"
  | "высокий рейтинг";

export interface ServicesItem {
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

export interface ProjectItemProps {
  servicesItem: ServicesItem;
  viewType: ServicesViewTypes;
}
