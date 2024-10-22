import { LoadedImageErrorsTypes } from "../../LoadImageBlock";

export type LoadImageBlockSecondarySizes = "small" | "medium";

export interface LoadImageBlockSecondaryProps {
  className?: string;
  size: LoadImageBlockSecondarySizes;
  LoadedImage: string;
  setLoadedImage: React.Dispatch<React.SetStateAction<string>>;
  LoadedImageErrors: LoadedImageErrorsTypes[];
  setLoadedImageErrors: React.Dispatch<
    React.SetStateAction<LoadedImageErrorsTypes[]>
  >;
}
