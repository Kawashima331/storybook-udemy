import type { Preview } from "@storybook/react";
import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";
  import { format } from "path";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    }
  },
  loaders: [mswLoader],
};

export default preview;
