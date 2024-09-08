import { LoadingConst } from "@/shared/types";
import { LoadedImageErrorsTypes } from "../LoadImageBlock_types";
import {
  LoadImageBlockMaxSize,
  LoadImageBlockMinHeight,
  LoadImageBlockMinSize,
  LoadImageBlockMinWidth,
  LoadImageIsValidCheck,
} from "../LoadImageIsValidCheck/LoadImageIsValidCheck";

export const LoadedImageOnLoad = (
  e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
  setLoadedImage: React.Dispatch<React.SetStateAction<string>>,
  setLoadedImageErrors: React.Dispatch<
    React.SetStateAction<LoadedImageErrorsTypes[]>
  >
) => {
  setLoadedImage(LoadingConst);

  const UserInputFile =
    (e as React.ChangeEvent<HTMLInputElement>).target.files ||
    (e as React.DragEvent<HTMLDivElement>).dataTransfer?.files;

  const LoadedImageErrorsCopy: LoadedImageErrorsTypes[] = [];

  setLoadedImageErrors([]);

  if (UserInputFile && UserInputFile.length) {
    const fileReader = new FileReader();

    const ImageSizeCheck: boolean =
      UserInputFile[0].size >= LoadImageBlockMinSize &&
      UserInputFile[0].size <= LoadImageBlockMaxSize;

    fileReader.onload = function () {
      const imageForCheck = new Image();
      imageForCheck.src = fileReader.result as string;

      imageForCheck.onload = function () {
        const ImageResolutionCheck: boolean =
          imageForCheck.naturalWidth >= LoadImageBlockMinWidth &&
          imageForCheck.naturalHeight >= LoadImageBlockMinHeight;

        if (
          LoadImageIsValidCheck(
            UserInputFile[0].size,
            imageForCheck.naturalWidth,
            imageForCheck.naturalHeight
          )
        ) {
          setLoadedImage(fileReader.result as string);
        } else {
          if (!ImageResolutionCheck)
            LoadedImageErrorsCopy.push(LoadedImageErrorsTypes.RESOLUTION_ERROR);

          if (!ImageSizeCheck)
            LoadedImageErrorsCopy.push(LoadedImageErrorsTypes.SIZE_ERROR);

          setLoadedImageErrors(LoadedImageErrorsCopy);
        }
      };
    };
    fileReader.readAsDataURL(UserInputFile[0]);
  }
};
