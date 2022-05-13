import Select, {SelectProps} from '@mui/material/Select'

export type PoolSelectProps = SelectProps

export default function PoolSelect(props: PoolSelectProps) {
  const {sx = {}, ...restProps} = props
  return (
    <Select
      sx={{
        color: 'common.white',
        boxShadow: 1,
        paddingX: 1,
        paddingY: 0,
        height: '36px',
        '& fieldset': {
          border: 'none',
        },
        '& .MuiSelect-select': {
          paddingX: 2,
          paddingY: 1,
        },
        ...sx,
      }}
      {...restProps}
    />
  )
}
