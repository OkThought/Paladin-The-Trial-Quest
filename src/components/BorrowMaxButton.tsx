import Button, {ButtonProps} from '@mui/material/Button'

export type BorrowMaxButtonProps = ButtonProps

export default function BorrowMaxButton(props: BorrowMaxButtonProps) {
  const {sx = {}, ...restProps} = props

  const _props: ButtonProps = {
    color: 'secondary',
    variant: 'contained',
    ...restProps,
    sx: {
      color: (theme) => theme.palette.secondary.main,
      backgroundColor: '#F567364D',
      paddingX: 1,
      paddingY: 0,
      minWidth: 'auto',
      width: '48px',
      height: '28px',
      ...sx,
    },
  }

  return <Button {..._props} />
}
