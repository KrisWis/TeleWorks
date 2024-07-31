export enum AvatarSizes {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

export interface AvatarProps {
  imgSize: AvatarSizes;
  imgURL: string;
  className?: string;
}
