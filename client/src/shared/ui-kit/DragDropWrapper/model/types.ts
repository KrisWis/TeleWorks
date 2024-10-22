import { ReactNode } from "react";
import { LoadedImageErrorsTypes } from "../../LoadImageBlock";

export interface DragDropWrapperProps {
  OnDragLeave: React.DragEventHandler<HTMLDivElement>;
  OnDragEnter: React.DragEventHandler<HTMLDivElement>;
  setLoadedImage?: React.Dispatch<React.SetStateAction<string>>;
  setLoadedImageErrors?: React.Dispatch<
    React.SetStateAction<LoadedImageErrorsTypes[]>
  >;
  LoadedImageErrors?: LoadedImageErrorsTypes[];
  onlyImages?: boolean;
  children?: ReactNode;
}
