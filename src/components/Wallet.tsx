import Box from '@mui/material/Box'
import {strEllipsis} from '../utils'

export type WalletProps = {
  balance: string
  address: string
}

export default function Wallet(props: WalletProps) {
  return (
    <Box height="40px" display="flex">
      <Box
        border="4px solid"
        borderRadius="10px"
        paddingLeft="16px"
        paddingRight="32px"
        marginRight="-16px"
        display="flex"
        alignItems="center"
      >
        {props.balance} ETH
      </Box>
      <Box
        component="div"
        border="4px"
        borderRadius="10px"
        height="40px"
        bgcolor="background.paper"
        color="common.white"
        paddingX="16px"
        display="flex"
        alignItems="center"
      >
        {strEllipsis(props.address)}
      </Box>
    </Box>
  )
}
