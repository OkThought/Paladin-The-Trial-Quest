import {Button} from '@mui/material'
import {action} from 'mobx'
import {observer} from 'mobx-react'
import {useStore} from '../stores/RootStore'

export type BorrowSubmitButtonContainerProps = {}

export default observer(function BorrowSubmitButtonContainer(
  props: BorrowSubmitButtonContainerProps,
) {
  const store = useStore()
  const handler = action('deposit', () => {
    store.borrowStore.deposit()
  })
  return (
    <Button onClick={handler} color="secondary">
      Approve
    </Button>
  )
})
