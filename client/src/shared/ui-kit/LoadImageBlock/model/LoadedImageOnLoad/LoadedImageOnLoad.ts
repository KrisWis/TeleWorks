import { LoadingConst } from "@/shared/types/global";
import { LoadedImageErrorsTypes } from "../LoadImageBlock_types";
import {
  LoadImageBlockMaxSize,
  LoadImageBlockMinHeight,
  LoadImageBlockMinSize,
  LoadImageBlockMinWidth,
  LoadImageIsValidCheck,
} from "../LoadImageIsValidCheck/LoadImageIsValidCheck";
import { isUnit } from "@/shared/const/global";

export const LoadingVideoMaxSize: number = 20971520;

export const LoadedImageOnLoad = (
  e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
  setLoadedImage: React.Dispatch<React.SetStateAction<string>>,
  setLoadedImageErrors: React.Dispatch<
    React.SetStateAction<LoadedImageErrorsTypes[]>
  >,
  mockFileName?: string
) => {
  const UserInputFile = (e as React.DragEvent<HTMLDivElement>).dataTransfer
    ?.files!.length
    ? (e as React.DragEvent<HTMLDivElement>).dataTransfer?.files
    : (e as React.ChangeEvent<HTMLInputElement>).target.files;

  const LoadedImageErrorsCopy: LoadedImageErrorsTypes[] = [];

  setLoadedImageErrors([]);

  if (UserInputFile && UserInputFile.length) {
    if (!isUnit) {
      setLoadedImage(LoadingConst);
    } else {
      if (mockFileName) {
        setLoadedImage(mockFileName);
      }
    }

    if (UserInputFile[0].type.startsWith("video")) {
      if (UserInputFile[0].size <= LoadingVideoMaxSize) {
        const url = URL.createObjectURL(UserInputFile[0]);
        setLoadedImage(url);
      } else {
        setLoadedImageErrors([LoadedImageErrorsTypes.SIZE_ERROR]);
      }
      return;
    }

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
          setLoadedImage("");
        }
      };
    };
    fileReader.readAsDataURL(UserInputFile[0]);
  }
};
