import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PaladinLogo from "../components/PaladinLogo";
import { PropsWithChildren } from "react";
import Stack from "@mui/material/Stack";

export type PaladinAppBarProps = PropsWithChildren<AppBarProps>;

export default function PaladinAppBar(props: PaladinAppBarProps) {
  const { children, ...restProps } = props;
  return (
    <AppBar {...restProps}>
      <Toolbar>
        <PaladinLogo />
        <Stack flexGrow={1} justifyContent="end" direction="row">
          {children}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
