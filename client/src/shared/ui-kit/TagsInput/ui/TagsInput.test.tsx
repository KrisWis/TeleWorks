import { renderWithRouter } from "@/shared/utils/renderWithRouter";
import { TagsInput } from "./TagsInput";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("TagsInput", () => {
  test("user can add tags", async () => {
    const TestProvider = () => {
      const [selectedTags, setSelectedTags] = useState<string[]>([]);

      return (
        <TagsInput
          setSelectedTags={setSelectedTags}
          SelectedTags={selectedTags}
        />
      );
    };

    const { getByTestId } = renderWithRouter(<TestProvider />);

    const input = getByTestId("TagsInput.input");

    await userEvent.type(input, "tag");

    await userEvent.keyboard("{Enter}");

    expect(getByTestId(`TagsInput.tag.tag`)).toBeInTheDocument();

    await userEvent.type(input, "tag2");

    await userEvent.keyboard("{Enter}");

    expect(getByTestId(`TagsInput.tag.tag2`)).toBeInTheDocument();
  });

  test("user can add tag and delete with backspace", async () => {
    const TestProvider = () => {
      const [selectedTags, setSelectedTags] = useState<string[]>([]);

      return (
        <TagsInput
          setSelectedTags={setSelectedTags}
          SelectedTags={selectedTags}
        />
      );
    };

    const { getByTestId, queryByTestId } = renderWithRouter(<TestProvider />);

    const input = getByTestId("TagsInput.input");

    await userEvent.type(input, "tag");

    await userEvent.keyboard("{Enter}");

    expect(getByTestId(`TagsInput.tag.tag`)).toBeInTheDocument();

    await userEvent.keyboard("{Backspace}");

    expect(queryByTestId(`TagsInput.tag.tag`)).not.toBeInTheDocument();
  });

  test("user can add tag and delete with cross", async () => {
    const TestProvider = () => {
      const [selectedTags, setSelectedTags] = useState<string[]>([]);

      return (
        <TagsInput
          setSelectedTags={setSelectedTags}
          SelectedTags={selectedTags}
        />
      );
    };

    const { getByTestId, queryByTestId } = renderWithRouter(<TestProvider />);

    const input = getByTestId("TagsInput.input");

    await userEvent.type(input, "tag");

    await userEvent.keyboard("{Enter}");

    expect(getByTestId(`TagsInput.tag.tag`)).toBeInTheDocument();

    await userEvent.click(getByTestId(`TagsInput.tag.tag.Delete`));

    expect(queryByTestId(`TagsInput.tag.tag`)).not.toBeInTheDocument();
  });
});
