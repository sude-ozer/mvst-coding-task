import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

const metaObj = {
    component: NavBar,
    title: 'NavBar',
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
              <MemoryRouter>
                <Routes>
                  <Route path="/*" element={<Story />} />
                </Routes>
              </MemoryRouter>
            );
        },
    ]
  } as Meta<typeof NavBar>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {};

export default metaObj;