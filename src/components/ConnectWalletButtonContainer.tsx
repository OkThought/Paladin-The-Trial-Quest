import {observer} from 'mobx-react'
import ConnectWalletButton from './ConnectWalletButton'
import {useStore} from '../stores/RootStore'

export default observer(function ConnectWalletButtonContainer() {
  const store = useStore()
  return <ConnectWalletButton onClick={() => store.eth.connect()} />
})
