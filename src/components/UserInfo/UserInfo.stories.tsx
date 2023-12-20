import { Meta, StoryObj } from '@storybook/react';
import UserInfo from './UserInfo';
import { mockUserData } from '../../common/mockUserData';

const metaObj = {
    component: UserInfo,
    title: 'UserInfo',
    tags: ['autodocs'],
    args: {
        user: mockUserData
    }
  } as Meta<typeof UserInfo>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {
    args: {
        user: mockUserData,
    }
};

export default metaObj;