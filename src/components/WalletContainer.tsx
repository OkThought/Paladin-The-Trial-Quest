// import {trace} from 'mobx'
import {observer} from 'mobx-react'
import {useStore} from '../stores/RootStore'
import ConnectWalletButtonContainer from './ConnectWalletButtonContainer'
import Wallet from './Wallet'

export default observer(function WalletContainer() {
  const store = useStore()
  const wallet = store.currentWallet
  const balance = wallet?.balanceFormatted
  // trace(true)

  if (wallet) {
    console.log(`Render balance: ${balance}`)
    return (
      <Wallet
        balance={balance === undefined ? '?' : balance}
        address={wallet.address}
      />
    )
  } else {
    return <ConnectWalletButtonContainer />
  }
})
