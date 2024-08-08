// Переменные для валидации
export const LoadImageBlockMinWidth: number = 660;
export const LoadImageBlockMinHeight: number = 440;
export const LoadImageBlockMinSize: number = 30720;
export const LoadImageBlockMaxSize: number = 10485760;

export const LoadImageIsValidCheck = (
  LoadImageSize: number,
  LoadImageNaturalWidth: number,
  LoadImageNaturalHeight: number
): boolean => {
  const LoadImageSizeIsValidCheck: boolean =
    LoadImageSize >= LoadImageBlockMinSize &&
    LoadImageSize <= LoadImageBlockMaxSize;

  const LoadImageResolutionCheck: boolean =
    LoadImageNaturalWidth >= LoadImageBlockMinWidth &&
    LoadImageNaturalHeight >= LoadImageBlockMinHeight;

  if (!LoadImageSizeIsValidCheck || !LoadImageResolutionCheck) {
    return false;
  }

  return true;
};
