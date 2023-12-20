import { Meta, StoryObj } from '@storybook/react';
import UserPage from './UserPage';

const metaObj = {
    component: UserPage,
    title: 'UserPage',
    tags: ['autodocs'],
  } as Meta<typeof UserPage>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {};

export default metaObj;