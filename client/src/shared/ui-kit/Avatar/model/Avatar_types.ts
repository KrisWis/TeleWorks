export enum AvatarSizes {
  SMALLER = "smaller",
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

export interface AvatarProps {
  imgSize: AvatarSizes;
  imgURL: string;
  className?: string;
}
