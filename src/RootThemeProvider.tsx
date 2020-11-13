import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { PaletteType } from "@material-ui/core";

import App from "./App";

export default function RootThemeProvider() {
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const [currentTheme, setCurrentTheme] = useState<PaletteType>(defaultTheme);

  function handleThemeChange(event: any) {
    setCurrentTheme(event.matches ? "dark" : "light");
  }

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: currentTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
