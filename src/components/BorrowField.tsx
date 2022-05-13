import {TextField, TextFieldProps} from '@mui/material'

export type BorrowFieldProps = TextFieldProps

export default function BorrowField(props: BorrowFieldProps) {
  const {sx = {}, ...restProps} = props

  const _props: TextFieldProps = {
    type: 'number',
    sx: {
      flexGrow: 1,
      '& input': {
        textAlign: 'right',
      },
      '& fieldset': {
        border: 'none',
      },
      ...sx,
    },

    ...restProps,
  }
  return <TextField {..._props} />
}
