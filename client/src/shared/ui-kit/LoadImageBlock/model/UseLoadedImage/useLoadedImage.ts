import { LoadingType } from "@/shared/types";
import { useState } from "react";

export const UseLoadedImage = (
  imgURL?: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [LoadedImage, setLoadedImage] = useState<string | LoadingType>("");

  return [imgURL ? imgURL : LoadedImage, setLoadedImage];
};
