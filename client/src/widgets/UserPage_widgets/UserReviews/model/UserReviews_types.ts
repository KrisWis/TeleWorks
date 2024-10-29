import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item";
import { ReviewsPanelProps } from "@/widgets/Global_widgets/ReviewsPanel";

export interface UserReviewsProps {
  ReviewsPanelProps: ReviewsPanelProps;
  reviewsItems: Reviews__itemProps[];
}
