import type { Meta, StoryObj } from '@storybook/react';
import { KindDeedsPage } from './KindDeedsPage';

const meta = {
  title: 'Pages/KindDeedsPage',
  component: KindDeedsPage,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof KindDeedsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};