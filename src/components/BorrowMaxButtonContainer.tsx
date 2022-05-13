import {observer} from 'mobx-react'
import {useStore} from '../stores/RootStore'
import BorrowMaxButton from './BorrowMaxButton'

export default observer(function BorrowMaxButtonContainer() {
  const store = useStore()
  const {maxAmount} = store.borrowStore
  const disabled = maxAmount === undefined

  const handler = () => {
    if (!disabled) {
      store.borrowStore.amount = maxAmount
    }
  }
  return (
    <BorrowMaxButton disabled={disabled} onClick={handler}>
      max
    </BorrowMaxButton>
  )
})
