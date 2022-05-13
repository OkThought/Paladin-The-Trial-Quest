import {PropsWithChildren} from 'react'
import Box from '@mui/material/Box'

export type TabPanelProps = PropsWithChildren<{
  index: number
  value: number
}>

export default function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  )
}
