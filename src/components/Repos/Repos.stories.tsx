import { Meta, StoryObj } from '@storybook/react';
import Repos from './Repos';
import { mockRepoData } from '../../common/mockRepoData';

const metaObj = {
    component: Repos,
    title: 'Repos',
    tags: ['autodocs'],
    args: {
        repositories: mockRepoData,
    }
  } as Meta<typeof Repos>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {
    args: {
        repositories: mockRepoData,
    }
};

export default metaObj;