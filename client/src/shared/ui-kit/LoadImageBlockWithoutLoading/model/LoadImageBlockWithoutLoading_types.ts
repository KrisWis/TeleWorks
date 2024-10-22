export enum LoadImageBlockSizes {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}
export interface LoadImageBlockWithoutLoadingProps {
  title?: string;
  size: LoadImageBlockSizes;
  requirements?: boolean;
  className?: string;
  withBG?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  isWarn?: boolean;
  isHovered?: boolean;
  bigViewInMobile?: boolean;
  onClick?: () => void;
}
