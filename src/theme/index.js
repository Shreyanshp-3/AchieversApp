// src/theme/index.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  fontSizes: {
    md: "16px",
  },
  fontWeights: {
    medium: 500,
  },
});

export default theme;
