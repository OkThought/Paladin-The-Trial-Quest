import {action, makeAutoObservable, reaction, runInAction} from 'mobx'
import {createContext, useContext} from 'react'
import {POOLS} from '../pools'
import PoolStore from './PoolStore'
import EthereumStore from './EthereumStore'
import WalletStore from './WalletStore'
import BorrowStore from './BorrowStore'

export default class RootStore {
  readonly eth = new EthereumStore({root: this})
  readonly pools = Object.fromEntries(
    Object.entries(POOLS).map(([symbol, hash]) => [
      symbol,
      new PoolStore({root: this, symbol, poolAddress: hash}),
    ]),
  )
  readonly poolsList = Object.values(this.pools)
  readonly borrowStore = new BorrowStore({root: this})

  currentPool = this.pools.AAVE
  currentWallet: WalletStore | undefined = undefined
  userWallets: WalletStore[] = []

  constructor() {
    makeAutoObservable(
      this,
      {
        // pools: false,
        // eth: false,
      },
      {autoBind: true},
    )
  }

  init() {
    const disposers = [
      reaction(
        () => this.eth.accounts,
        action('UpdateWallets', (accounts) => {
          this.userWallets = accounts.map(
            (address) => new WalletStore({root: this, address}),
          )
          this.currentWallet = this.userWallets
            ? this.userWallets[0]
            : undefined
          console.log(`Current Wallet: ${this.currentWallet?.address}`)
        }),
      ),
      reaction(
        () => this.currentWallet,
        (curWallet, prevWallet) => {
          if (curWallet !== prevWallet && curWallet !== undefined) {
            curWallet.init()
          }
        },
      ),
    ]

    return () => disposers.forEach((dispose) => dispose())
  }
}

export const RootStoreContext = createContext<RootStore | null>(null)

export function useStore() {
  return useContext(RootStoreContext)!
}
