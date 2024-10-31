import type { Meta, StoryObj } from "@storybook/react";
import { AttachFileContainer } from "./AttachFileContainer";
import { useRef, useState } from "react";
import { LoadedFile } from "@/shared/types/global";

const ComponentWithRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputFiles, setInputFiles] = useState<LoadedFile[]>([]);

  const setInputFileProgress = useState<number>(0)[1];

  return (
    <AttachFileContainer
      inputRef={inputRef}
      InputFiles={inputFiles}
      setInputFiles={setInputFiles}
      setInputFileProgress={setInputFileProgress}
    />
  );
};

const meta = {
  title: "Global Widgets/AttachFileContainer",
  component: ComponentWithRef,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AttachFileContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
