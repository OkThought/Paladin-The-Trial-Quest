import {action} from 'mobx'
import {observer} from 'mobx-react'
import {useStore} from '../stores/RootStore'
import BorrowField, {BorrowFieldProps} from './BorrowField'

export type BorrowFieldContainerProps = BorrowFieldProps

export default observer(function BorrowFieldContainer(
  props: BorrowFieldContainerProps,
) {
  const store = useStore()
  const {amount, maxAmount} = store.borrowStore
  const {...restProps} = props

  const handleChange = action<BorrowFieldProps['onChange']>((event) => {
    const newAmount = parseFloat(event.target.value)
    store.borrowStore.amount = newAmount
  })

  return (
    <BorrowField
      inputProps={{min: 0, max: maxAmount}}
      onChange={handleChange}
      value={amount}
      {...restProps}
    />
  )
})
