import Paper, {PaperProps} from '@mui/material/Paper'
import {styled} from '@mui/material/styles'

// const PaperSection = styled(Paper)(({theme}) => ({
//   backgroundColor: theme.palette.primary.light,
//   borderRadius: '10px',
//   paddingX: 2,
//   paddingY: 1,
// }))

export type PaperSectionProps = PaperProps

export default function PaperSection(props: PaperSectionProps) {
  const {sx = {}, ...restProps} = props
  return (
    <Paper
      {...{
        sx: {
          backgroundColor: 'primary.light',
          borderRadius: '10px',
          paddingX: 2,
          paddingY: 1,
          ...sx,
        },
        ...restProps,
      }}
    />
  )
}
