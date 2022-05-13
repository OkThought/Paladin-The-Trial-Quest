import {observer} from 'mobx-react'
import BorrowForm from './BorrowForm'
import PoolSelectContainer from './PoolSelectContainer'
import BorrowMaxButtonContainer from './BorrowMaxButtonContainer'
import BorrowFieldContainer from './BorrowFieldContainer'

export default observer(function BorrowFormContainer() {
  return (
    <BorrowForm>
      <PoolSelectContainer />
      <BorrowMaxButtonContainer />
      <BorrowFieldContainer />
    </BorrowForm>
  )
})
