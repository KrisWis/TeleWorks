import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import { LoadImageBlock } from "./LoadImageBlock";
import { waitFor } from "@testing-library/react";
import { LoadImageBlockSizes } from "../../LoadImageBlockWithoutLoading";
import {
  mockFileName,
  mockFileName2,
  UseLoadedImage,
  UseLoadedImageErrors,
} from "..";
import userEvent from "@testing-library/user-event";

describe("Widgets/LoadImageBlock", () => {
  test("User can upload a file with click", async () => {
    const TestProvider = () => {
      const [LoadedImage, setLoadedImage] = UseLoadedImage();

      const [LoadedImageErrors, setLoadedImageErrors] = UseLoadedImageErrors();

      return (
        <LoadImageBlock
          size={LoadImageBlockSizes.BIG}
          LoadedImage={LoadedImage}
          setLoadedImage={setLoadedImage}
          LoadedImageErrors={LoadedImageErrors}
          setLoadedImageErrors={setLoadedImageErrors}
        />
      );
    };

    const { getByTestId } = renderWithRouter(<TestProvider />);

    const file = new File(["hello"], mockFileName, { type: "image/png" });

    const fileInput = getByTestId("LoadImageBlock.Input") as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    await userEvent.upload(fileInput, file);

    await waitFor(() => {
      expect(getByTestId(`LoadImageBlock.Image`)).toHaveAttribute(
        "src",
        mockFileName
      );
    });
  });

  test("User can upload and change a file with click", async () => {
    const TestProvider = () => {
      const [LoadedImage, setLoadedImage] = UseLoadedImage();

      const [LoadedImageErrors, setLoadedImageErrors] = UseLoadedImageErrors();

      return (
        <LoadImageBlock
          size={LoadImageBlockSizes.BIG}
          LoadedImage={LoadedImage}
          setLoadedImage={setLoadedImage}
          LoadedImageErrors={LoadedImageErrors}
          setLoadedImageErrors={setLoadedImageErrors}
        />
      );
    };

    const { getByTestId } = renderWithRouter(<TestProvider />);

    const file = new File(["hello"], mockFileName, { type: "image/png" });

    const fileInput = getByTestId("LoadImageBlock.Input") as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    await userEvent.upload(fileInput, file);

    await waitFor(() => {
      expect(getByTestId(`LoadImageBlock.Image`)).toHaveAttribute(
        "src",
        mockFileName
      );
    });

    const file2 = new File(["hello"], mockFileName2, { type: "image/png" });

    await userEvent.upload(fileInput, file2);

    await waitFor(() => {
      expect(getByTestId(`LoadImageBlock.Image`)).toHaveAttribute(
        "src",
        mockFileName2
      );
    });
  });
});
