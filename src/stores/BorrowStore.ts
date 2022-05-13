import {BigNumber, BigNumberish} from 'ethers'
import {formatEther} from 'ethers/lib/utils'
import {makeAutoObservable} from 'mobx'
import RootStore from './RootStore'

export type BorrowStoreProps = {
  root: RootStore
}

export default class BorrowStore {
  readonly root: BorrowStoreProps['root']
  private _amount: number = 0

  constructor(props: BorrowStoreProps) {
    this.root = props.root

    makeAutoObservable(this, {}, {autoBind: true})
  }

  set amountWei(value: BigNumber) {
    let _value = value
    if (value.lt(0)) {
      _value = BigNumber.from(0)
    } else {
      const {balanceWei = BigNumber.from(0)} = this.root.currentWallet || {}
      if (value.gt(balanceWei)) {
        _value = balanceWei
      }
    }
    this._amount = this.root.currentPool.weiToTokens(_value) || 0
  }

  get amountWei(): BigNumber {
    return this.root.currentPool.toWei(this._amount)
  }

  get maxAmount() {
    return this.root.currentPool.weiToTokens(
      this.root.currentWallet?.balanceWei,
    )
  }

  get amount(): number {
    return this._amount
  }

  set amount(value: number) {
    this._amount = value
  }

  async deposit() {
    const {amountWei} = this
    if (!amountWei) return
    const result = await this.root.currentPool.contract.deposit(amountWei)
    console.log(
      `Deposited: ${formatEther(result)} ${this.root.currentPool.symbol}`,
    )
    this.root.currentWallet!.fetchBalance()
  }
}
