import MenuItem from '@mui/material/MenuItem'
import {action} from 'mobx'
import {observer} from 'mobx-react'
import {useStore} from '../stores/RootStore'
import PoolSelect, {PoolSelectProps} from './PoolSelect'

export type PoolSelectContainerProps = {}

export default observer(function PoolSelectContainer(
  props: PoolSelectContainerProps,
) {
  const store = useStore()

  const handleChange = action<PoolSelectProps['onChange']>(
    'poolSelectChange',
    (event) => {
      store.currentPool =
        store.pools[event.target.value as keyof typeof store.pools]
    },
  )

  return (
    <PoolSelect onChange={handleChange} value={store.currentPool.symbol}>
      {store.poolsList.map((pool) => (
        <MenuItem key={pool.symbol} value={pool.symbol}>
          ${pool.symbol}
        </MenuItem>
      ))}
    </PoolSelect>
  )
})
