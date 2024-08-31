import type { Meta, StoryObj } from '@storybook/react';
import { TurnkeyWebsitesPage } from './TurnkeyWebsitesPage';

const meta = {
  title: 'Pages/TurnkeyWebsitesPage',
  component: TurnkeyWebsitesPage,
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof TurnkeyWebsitesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};