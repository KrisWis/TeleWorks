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
