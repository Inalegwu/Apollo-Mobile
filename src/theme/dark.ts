import { createTheme } from "@shopify/restyle";
import theme, { type Theme } from "./theme";

const palette = {
  background: "#191919",
  foreground: "#EEEEEE",
  foregroundMuted: "#7B7B7B",
  success: "#00FF38",
} as const;

const darkTheme: Theme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    foreground: palette.foreground,
  },
});

export default darkTheme;
