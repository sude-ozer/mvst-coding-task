import { Meta, StoryObj } from '@storybook/react';
import Search from './Search';

const metaObj = {
    component: Search,
    title: 'Search',
    tags: ['autodocs'],
    args: {
        searchKeyword: '',
        languages: [],
        updateSearchKeyword(value) {

        },
        updateSelectedLanguage(newLanguage) {
            
        },
    }
  } as Meta<typeof Search>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {
    args: {
        searchKeyword: '',
        languages: [],
        updateSearchKeyword(value) {
            
        },
        updateSelectedLanguage(newLanguage) {
            
        },
    }
};

export const Props: Story = {
    args: {
        searchKeyword: 'project',
        languages: ['HTML', 'Javascript', 'CSS'],
        updateSearchKeyword(value: string) {
            
        },
        updateSelectedLanguage(newLanguage) {
            
        },
    }
};

export default metaObj;