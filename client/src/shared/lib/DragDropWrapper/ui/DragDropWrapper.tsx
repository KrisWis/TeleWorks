import { memo, useEffect } from "react";
import { DragDropWrapperProps } from "../model/types";
import {
  LoadedImageErrorsTypes,
  LoadedImageOnLoad,
} from "@/shared/ui-kit/LoadImageBlock";
import { Flex } from "@/shared/lib/Stack";

export const DragDropWrapper: React.FC<DragDropWrapperProps> = memo(
  ({
    OnDragEnter,
    OnDragLeave,
    setLoadedImage,
    LoadedImageErrors,
    setLoadedImageErrors,
    onlyImages = false,
    children,
  }): React.JSX.Element => {
    // Реализация drag&drop
    const defaultDragDropFunc = (e: Event) => {
      e.preventDefault();
      return false;
    };

    useEffect(() => {
      ["dragover", "drop"].forEach(function (event: string) {
        document.addEventListener(event, defaultDragDropFunc);
      });

      return () => {
        ["dragover", "drop"].forEach(function (event: string) {
          document.removeEventListener(event, defaultDragDropFunc);
        });
      };
    }, []);

    const LoadedFileOnDrop = (
      e: React.DragEvent<HTMLDivElement>,
    ): void | boolean => {
      OnDragLeave(e);

      const file = e.dataTransfer?.files[0];

      if (!file) {
        return;
      }

      if (
        (file.type.startsWith("image/") || !onlyImages) &&
        setLoadedImage &&
        setLoadedImageErrors
      ) {
        LoadedImageOnLoad(e, setLoadedImage, setLoadedImageErrors);
      } else {
        if (setLoadedImageErrors && LoadedImageErrors) {
          setLoadedImageErrors([
            ...LoadedImageErrors,
            LoadedImageErrorsTypes.FORMAT_ERROR,
          ]);
        }
        return false;
      }
    };

    return (
      <Flex
        max
        align="center"
        justify="center"
        onDragEnter={OnDragEnter}
        onDragLeave={OnDragLeave}
        onDrop={LoadedFileOnDrop}
        style={{ position: "relative" }}
        direction="column"
      >
        {children}
      </Flex>
    );
  },
);
DragDropWrapper.displayName = "DragDropWrapper";
