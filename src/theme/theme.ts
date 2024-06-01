import { createTheme } from "@shopify/restyle";

const palette = {
  primary: "#8AA0CB",
  accent: "rgba(138,160,203,8%)",
  white: "#FFFFFF",
  success: "#00FF38",
  error: "#5E1C16",
  background: "#FAF9F9",
  foreground: "#000000",
  foregroundMuted: "#C6C6C6",
} as const;

const theme = createTheme({
  colors: {
    primary: palette.primary,
    accent: palette.accent,
    success: palette.success,
    error: palette.error,
    foreground: palette.foreground,
    background: palette.background,
    foregroundMuted: palette.foregroundMuted,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      fontFamily: "nunito",
      fontSize: 20,
      fontWeight: "900",
    },
  },
});

export type Theme = typeof theme;

export default theme;
