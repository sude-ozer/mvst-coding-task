import type { Preview } from "@storybook/react";
import { MockedProvider } from "@apollo/client/testing";

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
