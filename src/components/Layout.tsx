import { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box, { BoxProps } from "@mui/material/Box";
import { mainTheme } from "../theme";
import "../index.css";

export type LayoutProps = PropsWithChildren<BoxProps>;

export default function Layout(props: LayoutProps) {
  const { children, ...restProps } = props;
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Box {...restProps}>{children}</Box>
    </ThemeProvider>
  );
}
