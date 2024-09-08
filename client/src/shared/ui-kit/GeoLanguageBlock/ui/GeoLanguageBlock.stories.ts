import type { Meta, StoryObj } from "@storybook/react";
import { GeoLanguageBlock } from "./GeoLanguageBlock";
import { GeoLanguageTypes } from "../model/GeoLanguageBlock_types";

const meta = {
  title: "Shared/GeoLanguageBlock",
  component: GeoLanguageBlock,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GeoLanguageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    geoLanguage: GeoLanguageTypes.RUSSIAN,
  },
};
