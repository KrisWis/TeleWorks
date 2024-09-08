import { useState } from "react";
import { LoadedImageErrorsTypes } from "../LoadImageBlock_types";

export const UseLoadedImageErrors = (): [
  LoadedImageErrorsTypes[],
  React.Dispatch<React.SetStateAction<LoadedImageErrorsTypes[]>>,
] => {
  const [LoadedImageErrors, setLoadedImageErrors] = useState<
    LoadedImageErrorsTypes[]
  >([]);

  return [LoadedImageErrors, setLoadedImageErrors];
};
