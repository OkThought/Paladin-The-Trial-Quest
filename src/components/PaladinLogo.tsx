import Stack, { StackProps } from "@mui/material/Stack";
import PaladinLogoIcon from "./PaladinLogoIcon";
import PaladinLogoTitle from "./PaladinLogoTitle";

export type PaladinLogoProps = StackProps;

export default function PaladinLogo(props: PaladinLogoProps) {
  const { ...restProps } = props;

  return (
    <Stack
      spacing={"5.21px"}
      alignItems="stretch"
      direction="row"
      height="26.54px"
      {...restProps}
    >
      <PaladinLogoIcon />
      <PaladinLogoTitle height="24.51px" />
    </Stack>
  );
}
