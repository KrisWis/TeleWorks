import { Reviews__itemProps } from "@/entities/Global_entities/Reviews__item/model/Reviews__item_types";
import { Channel_reviewsProps } from "@/widgets/Global_widgets/Channel_reviews/model/Channel_reviews_types";

export interface ProjectReviewsProps {
  channelReviewsProps: Channel_reviewsProps;
  reviewsItems: Reviews__itemProps[];
}
