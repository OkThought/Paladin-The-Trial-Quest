import {styled} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import IPoolStats from '../types/IPoolStats'
import PaperSection from './PaperSection'
import {ReactChild} from 'react'
import Stack, {StackProps} from '@mui/material/Stack'

export type PoolProps = {
  symbol: string
  form?: ReactChild
  stats: Partial<IPoolStats>
  submit?: ReactChild
} & StackProps

const statNames: Array<keyof IPoolStats> = [
  'supplyTotal',
  'supplyBorrowed',
  'activeLoans',
  'minimumBorrowPeriodDays',
]

const Cell = styled(TableCell)(({theme}) => ({
  color: theme.palette.common.white,
  border: 0,
  padding: 0,
}))

export default function Pool(props: PoolProps) {
  const {symbol, stats, form, submit, ...restProps} = props

  return (
    <Stack spacing={2} {...restProps}>
      <Box typography="h6">{symbol} Pool</Box>

      <PaperSection>{form}</PaperSection>

      <PaperSection>
        <Box typography="body2" fontWeight="bold">
          Pool stats
        </Box>
        <Table>
          <TableBody>
            {statNames.map((stat) => {
              const value = stats[stat]
              return (
                <TableRow key={stat}>
                  <Cell>{stat}</Cell>
                  <Cell sx={{textAlign: 'right'}}>
                    {value === undefined ? '-' : value}
                  </Cell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </PaperSection>
      {submit}
    </Stack>
  )
}
