import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";
import { ReviewsPanelProps } from "@/widgets/Global_widgets/ReviewsPanel/model/ReviewsPanel_types";

export interface ProjectReviewsProps {
  ReviewsPanelProps: ReviewsPanelProps;
  reviewsItems: Reviews__itemProps[];
}
