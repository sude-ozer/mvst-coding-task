import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

const metaObj = {
    component: HomePage,
    title: 'HomePage',
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
  } as Meta<typeof HomePage>;

type Story = StoryObj<typeof metaObj>;
export const Default: Story = {};

export default metaObj;