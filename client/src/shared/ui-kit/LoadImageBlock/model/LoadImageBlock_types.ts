import { LoadImageBlockSizes } from "../../LoadImageBlockWithoutLoading";

export enum LoadedImageErrorsTypes {
  SIZE_ERROR = "Некорректный размер файла!",
  RESOLUTION_ERROR = "Неправильное разрешение изображения!",
  FORMAT_ERROR = "Неправильный формат файла!",
}

export interface LoadImageBlockProps {
  title?: string;
  size: LoadImageBlockSizes;
  requirements?: boolean;
  className?: string;
  LoadedImage: string;
  setLoadedImage: React.Dispatch<React.SetStateAction<string>>;
  LoadedImageErrors: LoadedImageErrorsTypes[];
  setLoadedImageErrors: React.Dispatch<
    React.SetStateAction<LoadedImageErrorsTypes[]>
  >;
}
