export enum ShowFullImageTypes {
  FULL = "full",
  SHORT = "short",
}

export interface ShowFullImageProps {
  imgURLs: string[];
  className?: string;
  ActiveSlideIndex?: number;
  type: ShowFullImageTypes;
}
