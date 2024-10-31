export interface ProjectForReview {
  imgURL: string;
  title: string;
  price: number;
}
export interface Reviews__itemProps {
  author: string;
  extraInfo: string;
  imgURL: string;
  date: string;
  text: string;
  stars: number;
  project?: ProjectForReview;
}
export interface ReviewsPanelProps {
  mark: number;
  reviewsAmount: number;
  fiveStarsProgress: number;
  fourStarsProgress: number;
  threeStarsProgress: number;
  twoStarsProgress: number;
  oneStarsProgress: number;
}
export interface AuthorCardProps {
  authorImgURL: string;
  authorName: string;
  online: boolean;
  TeleWorksChoice: boolean;
  reputation: number;
  ordersAmount: number;
  positiveReviews: number;
  negativeReviews: number;
  orderInQueue: number;
}
