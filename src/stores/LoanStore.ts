import {makeAutoObservable, runInAction} from 'mobx'
import {IBorrowData} from '../types/IBorrowData'
import PoolStore from './PoolStore'
import RootStore from './RootStore'

export type LoanStoreProps = {
  root: RootStore
  pool: PoolStore
  loanAddress: string
}

export default class LoanStore {
  readonly root: LoanStoreProps['root']
  readonly pool: LoanStoreProps['pool']
  readonly loanAddress: LoanStoreProps['loanAddress']
  data?: IBorrowData = undefined

  constructor(props: LoanStoreProps) {
    this.root = props.root
    this.pool = props.pool
    this.loanAddress = props.loanAddress
    makeAutoObservable(this, {}, {autoBind: true})
  }

  get isActive() {
    return this.data?._closed === false
  }

  async fetchData() {
    const data: IBorrowData = await this.pool.contract.getBorrowData(
      this.loanAddress,
    )
    // console.log('Borrow Data:', data)
    runInAction(() => {
      this.data = data
    })
  }
}
