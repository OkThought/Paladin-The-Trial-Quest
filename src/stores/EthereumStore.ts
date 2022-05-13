import {action, makeAutoObservable, runInAction} from 'mobx'
import {Contract, ethers} from 'ethers'
import RootStore from './RootStore'
import abi from '../abi'

export type Web3StoreProps = {
  root: RootStore
}

export default class EthereumStore {
  readonly root: Web3StoreProps['root']
  // provider = new Web3(Web3.givenProvider)
  readonly provider = new ethers.providers.Web3Provider(window.ethereum)
  readonly signer = this.provider.getSigner()
  readonly priceOracle = new Contract(
    '0x01C7470B4Bd7E25Acc40962B2aa84B423Dc74AeC',
    abi.PriceOracle,
    this.signer,
  )

  chainId?: string
  accounts: string[] = []

  constructor(props: Web3StoreProps) {
    this.root = props.root
    makeAutoObservable(this, {
      root: false,
      provider: false,
      signer: false,
      priceOracle: false,
      connect: action.bound,
      fetchAccounts: action.bound,
      fetchChain: action.bound,
    })
  }

  async connect() {
    await this.fetchAccounts()
    await this.fetchChain()
  }

  async fetchAccounts() {
    const accounts = await this.provider.send('eth_requestAccounts', [])
    console.log(`Got accounts: ${accounts}`)
    runInAction(() => {
      this.accounts = accounts
    })
  }

  async fetchChain() {
    const chainId: string = await this.provider.send('eth_chainId', [])
    runInAction(() => {
      this.chainId = chainId
    })
    console.log('ChainId:', this.chainId)
  }
}
