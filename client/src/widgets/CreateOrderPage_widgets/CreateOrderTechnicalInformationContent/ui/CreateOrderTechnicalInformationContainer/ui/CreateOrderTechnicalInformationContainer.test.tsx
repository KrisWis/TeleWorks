import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import { CreateOrderTechnicalInformationContainer } from "./CreateOrderTechnicalInformationContainer";
import { fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockFileName: string = "test.png";
const mockFileName2: string = "test2.png";

describe("Widgets/CreateOrderTechnicalInformationContainer", () => {
  test("User can upload a file", async () => {
    const { getByTestId } = renderWithRouter(
      <CreateOrderTechnicalInformationContainer />,
    );

    const file = new File(["hello"], mockFileName, { type: "image/png" });

    const fileInput = getByTestId(
      "CreateOrderTechnicalInformationContainer.AttachFilesInput",
    ) as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(
        getByTestId(`AttachFileContainerFile.${mockFileName}`),
      ).toBeInTheDocument();
    });
  });

  test("User can upload a file and delete file", async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <CreateOrderTechnicalInformationContainer />,
    );

    const file = new File(["hello"], mockFileName, { type: "image/png" });

    const fileInput = getByTestId(
      "CreateOrderTechnicalInformationContainer.AttachFilesInput",
    ) as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(
        getByTestId(`AttachFileContainerFile.${mockFileName}`),
      ).toBeInTheDocument();
    });

    const deleteFileButton = getByTestId(
      `AttachFileContainerFile.${mockFileName}.Delete`,
    );

    await userEvent.click(deleteFileButton);

    const fileComponent = queryByTestId(
      `AttachFileContainerFile.${mockFileName}`,
    );

    expect(fileComponent).not.toBeInTheDocument();
  });

  test("User can upload a file and change file", async () => {
    const { getByTestId, queryByTestId } = renderWithRouter(
      <CreateOrderTechnicalInformationContainer />,
    );

    const file = new File(["hello"], mockFileName, { type: "image/png" });

    const fileInput = getByTestId(
      "CreateOrderTechnicalInformationContainer.AttachFilesInput",
    ) as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(
        getByTestId(`AttachFileContainerFile.${mockFileName}`),
      ).toBeInTheDocument();
    });

    const changeFileInput = getByTestId(
      `AttachFileContainerFile.${mockFileName}.Change`,
    );

    const file2 = new File(["hello"], mockFileName2, {
      type: "image/png",
    });

    fireEvent.change(changeFileInput, { target: { files: [file2] } });

    await waitFor(() => {
      expect(
        getByTestId(`AttachFileContainerFile.${mockFileName2}`),
      ).toBeInTheDocument();

      expect(
        queryByTestId(`AttachFileContainerFile.${mockFileName}`),
      ).not.toBeInTheDocument();
    });
  });
});
