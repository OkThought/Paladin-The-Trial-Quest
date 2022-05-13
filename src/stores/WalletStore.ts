import {BigNumber} from 'ethers'
import {formatUnits} from 'ethers/lib/utils'
import {makeAutoObservable, runInAction} from 'mobx'
import {formatCompactFloat} from '../utils'
import RootStore from './RootStore'

export type WalletStoreProps = {
  root: RootStore
  address: string
  balance?: BigNumber
}

export default class WalletStore {
  readonly root: WalletStoreProps['root']
  readonly address: WalletStoreProps['address']
  balanceWei: WalletStoreProps['balance'] = undefined

  constructor(props: WalletStoreProps) {
    this.root = props.root
    this.address = props.address
    makeAutoObservable(this, {}, {autoBind: true})
  }

  init() {
    this.fetchBalance()
  }

  async fetchBalance() {
    const wei = await this.root.eth.provider.getBalance(this.address)
    console.log(`Balance: ${wei}`)
    runInAction(() => {
      this.balanceWei = wei
    })
  }

  get balanceEth() {
    const {balanceWei} = this
    if (balanceWei === undefined) return undefined
    return parseFloat(formatUnits(balanceWei, 'ether'))
  }

  get balanceFormatted() {
    console.log('computing eth balance')
    const {balanceEth} = this
    if (balanceEth === undefined) return undefined
    return formatCompactFloat(balanceEth)
  }
}
