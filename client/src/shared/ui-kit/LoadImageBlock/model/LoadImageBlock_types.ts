import { LoadImageBlockSizes } from "../../LoadImageBlockWithoutLoading";

export enum LoadedImageErrorsTypes {
  SIZE_ERROR = "Некорректный размер файла!",
  RESOLUTION_ERROR = "Неправильное разрешение изображения!",
  FORMAT_ERROR = "Неправильный формат файла!",
}

export interface LoadImageBlockProps {
  /**
   * Заголовок в компоненте
   */
  title?: string;

  /**
   * Вид отображения компонента
   */
  size: LoadImageBlockSizes;

  /**
   * Отображать ли нужные требования в компоненте
   */
  requirements?: boolean;
  className?: string;

  /**
   * Стейты для загружаемого сообщения и его ошибок
   */
  LoadedImage: string;
  setLoadedImage: React.Dispatch<React.SetStateAction<string>>;
  LoadedImageErrors: LoadedImageErrorsTypes[];
  setLoadedImageErrors: React.Dispatch<
    React.SetStateAction<LoadedImageErrorsTypes[]>
  >;
}
