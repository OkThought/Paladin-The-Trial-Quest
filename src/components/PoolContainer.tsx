// import {trace} from 'mobx'
import {observer} from 'mobx-react'
import {useEffect} from 'react'
import {useStore} from '../stores/RootStore'
import Pool from './Pool'
import BorrowFormContainer from './BorrowFormContainer'
import BorrowSubmitButtonContainer from './BorrowSubmitButtonContainer'
import Typography from '@mui/material/Typography'

export type PoolContainerProps = {}

export default observer(function PoolContainer(props: PoolContainerProps) {
  const store = useStore()
  const {maxAmount} = store.borrowStore
  const {symbol} = store.currentPool
  useEffect(() => store.currentPool.init(), [store])
  const balanceStr = maxAmount === undefined ? '' : `${maxAmount} ${symbol}`

  return (
    <Pool
      form={
        <>
          <BorrowFormContainer />
          <Typography variant="body2" color="text.disabled">
            Balance: {balanceStr}
          </Typography>
        </>
      }
      symbol={store.currentPool.symbol}
      stats={store.currentPool.stats}
      submit={<BorrowSubmitButtonContainer />}
    />
  )
})
