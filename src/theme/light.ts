import { createTheme } from "@shopify/restyle";
import theme, { type Theme } from "./theme";

const palette = {
  background: "#FAF9F9",
  foreground: "#000000",
  foregroundMuted: "#C6C6C6",
} as const;

const lightTheme: Theme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.background,
    foreground: palette.foreground,
    foregroundMute: palette.foregroundMuted,
  },
});

export default lightTheme;
