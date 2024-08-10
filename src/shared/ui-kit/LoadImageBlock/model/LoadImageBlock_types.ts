export enum LoadImageBlockSizes {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

export enum LoadedImageErrorsTypes {
  SIZE_ERROR = "Некорректный размер файла!",
  RESOLUTION_ERROR = "Неправильное разрешение изображения!",
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
