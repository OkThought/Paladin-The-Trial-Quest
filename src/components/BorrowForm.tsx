import Stack, {StackProps} from '@mui/material/Stack'

export type BorrowFormProps = StackProps

export default function BorrowForm(props: BorrowFormProps) {
  const {...restProps} = props

  const _props: StackProps = {
    direction: 'row',
    alignItems: 'center',
    spacing: 1,
    ...restProps,
  }
  return <Stack {..._props} />
}
