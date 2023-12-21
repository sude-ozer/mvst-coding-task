import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';

const metaObj = {
    component: ErrorPage,
    title: 'ErrorPage',
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
  } as Meta<typeof ErrorPage>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {};

export default metaObj;