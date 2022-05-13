import Button, { ButtonProps } from "@mui/material/Button";

export type ConnectWalletButtonProps = ButtonProps;

export default function ConnectWalletButton(props: ConnectWalletButtonProps) {
  const { children = "Connect Wallet", ...restProps } = props;
  return (
    <Button variant="contained" color="primary" {...restProps}>
      {children}
    </Button>
  );
}
