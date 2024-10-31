import type { Meta, StoryObj } from "@storybook/react";
import { ItemsSlider } from "./ItemsSlider";
import { NotFoundContainer } from "@/widgets/NotFound_widgets/NotFoundContainer";

const meta = {
  title: "Global Widgets/ItemsSlider",
  component: ItemsSlider,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ItemsSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ItemsSlider__headerProps: {
      title: "Слайдер",
      prevArrowId: "prevID",
      nextArrowId: "nextID",
    },
    ItemsSlider__sliderProps: {
      Component: NotFoundContainer,
      componentProps: [],
      visibleItems: 1,
      prevArrowId: "prev__sliderID",
      nextArrowId: "next__sliderID",
    },
  },
};
