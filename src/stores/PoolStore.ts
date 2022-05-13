import {BigNumber, Contract, FixedNumber} from 'ethers'
import {formatEther, formatUnits} from 'ethers/lib/utils'
import {makeAutoObservable, reaction, runInAction} from 'mobx'
import abi from '../abi'
import RootStore from './RootStore'
import LoanStore from './LoanStore'
import {TOKENS} from '../tokens'
import {formatCompactFloat} from '../utils'

export type PoolStoreProps = {
  root: RootStore
  poolAddress: string
  symbol: string
}

export default class PoolStore {
  readonly root: PoolStoreProps['root']
  readonly poolAddress: PoolStoreProps['poolAddress']
  readonly symbol: PoolStoreProps['symbol']
  readonly contract: Contract
  loans?: LoanStore[] = undefined
  assetPriceWei?: BigNumber = undefined
  assetPriceUsdBig?: BigNumber = undefined
  assetPriceUsdDecimals: BigNumber = BigNumber.from(18)
  assetTotalSupply?: BigNumber = undefined
  assetBorrowedSupply?: BigNumber = undefined
  assetMinimumBorrowPeriodDays?: number = undefined

  constructor(props: PoolStoreProps) {
    this.root = props.root
    this.symbol = props.symbol
    this.poolAddress = props.poolAddress
    this.contract = new Contract(
      this.poolAddress,
      abi.PalPool,
      this.root.eth.provider,
    )
    makeAutoObservable(this, {
      // root: false,
    })
  }

  init() {
    return reaction(
      () => this.root.currentWallet,
      (wallet) => {
        if (wallet) {
          runInAction(() => this.getStats())
        }
      },
    )
  }

  get tokenAddress() {
    return TOKENS[this.symbol as keyof typeof TOKENS]
  }

  get assetPriceEth() {
    const {assetPriceWei} = this
    if (assetPriceWei === undefined) return undefined
    return parseFloat(formatEther(assetPriceWei))
  }

  get assetPriceUsd() {
    const {assetPriceUsdBig, assetPriceUsdDecimals} = this
    if (assetPriceUsdBig === undefined) return undefined
    return parseFloat(formatUnits(assetPriceUsdBig, assetPriceUsdDecimals))
  }

  weiToEth(value: BigNumber) {
    return FixedNumber.from(formatEther(value)).toUnsafeFloat()
  }

  weiToTokens(value: BigNumber | undefined): number | undefined {
    if (value === undefined) return undefined
    const {assetPriceEth} = this
    if (assetPriceEth === undefined) return undefined
    return this.weiToEth(value) / assetPriceEth
  }

  toWei(value: number) {
    if (Math.abs(value) < 1e6) {
      return BigNumber.from(value * 1e9).mul(1e9)
    }
    return BigNumber.from(value).mul(BigNumber.from('1.e18'))
  }

  toUsd(value: BigNumber | undefined): number | undefined {
    if (value === undefined) return undefined
    const {assetPriceUsd} = this
    if (assetPriceUsd === undefined) return undefined
    return this.weiToEth(value) * assetPriceUsd
  }

  get supplyTotal() {
    const {assetTotalSupply, assetPriceEth} = this

    if (assetTotalSupply === undefined || assetPriceEth === undefined)
      return undefined

    return this.weiToEth(assetTotalSupply) / assetPriceEth
  }

  get supplyTotalUsd() {
    const {supplyTotal, assetPriceUsd} = this

    if (supplyTotal === undefined || assetPriceUsd === undefined)
      return undefined

    return supplyTotal * assetPriceUsd
  }

  get supplyTotalStr() {
    const {supplyTotal, supplyTotalUsd} = this

    if (supplyTotal === undefined || supplyTotalUsd === undefined) return '-'

    const formattedValue = formatCompactFloat(supplyTotal)
    const formattedValueUsd = formatCompactFloat(supplyTotalUsd)
    return `${formattedValue} ${this.symbol} / $${formattedValueUsd}`
  }

  get supplyBorrowed() {
    const {assetBorrowedSupply, assetPriceEth} = this

    if (assetBorrowedSupply === undefined || assetPriceEth === undefined)
      return undefined

    return this.weiToEth(assetBorrowedSupply) / assetPriceEth
  }

  get supplyBorrowedUsd() {
    const {supplyBorrowed, assetPriceUsd} = this

    if (supplyBorrowed === undefined || assetPriceUsd === undefined)
      return undefined

    return supplyBorrowed * assetPriceUsd
  }

  get supplyBorrowedStr() {
    const {supplyBorrowed, supplyBorrowedUsd} = this

    if (supplyBorrowed === undefined || supplyBorrowedUsd === undefined)
      return '-'

    const formattedValue = formatCompactFloat(supplyBorrowed)
    const formattedValueUsd = formatCompactFloat(supplyBorrowedUsd)
    return `${formattedValue} ${this.symbol} / $${formattedValueUsd}`
  }

  get activeLoans() {
    const {loans} = this
    if (loans === undefined || loans.some((loan) => loan.data === undefined))
      return '-'
    return loans.filter((loan) => loan.isActive).length
  }

  get minimumBorrowPeriodDays() {
    const {assetMinimumBorrowPeriodDays: assetMinimumBorrowDays} = this
    if (assetMinimumBorrowDays === undefined) return '-'
    return assetMinimumBorrowDays
  }

  get stats() {
    return {
      supplyTotal: this.supplyTotalStr,
      supplyBorrowed: this.supplyBorrowedStr,
      activeLoans: this.activeLoans,
      minimumBorrowPeriodDays: this.minimumBorrowPeriodDays,
    }
  }

  async getStats() {
    console.log(`Getting ${this.symbol} stats`)

    await Promise.all([
      this.fetchAssetEthPrice(),
      this.fetchAssetUsdPrice(),
      this.fetchAssetTotalSupply(),
      this.fetchAssetBorrowedSupply(),
      this.fetchMinimumBorrowPeriodDays(),
    ])
    await this.fetchActiveLoans()
  }

  async fetchAssetEthPrice() {
    const [wei, decimals] = (await this.root.eth.priceOracle.getAssetPrice(
      this.tokenAddress,
    )) as [BigNumber, BigNumber]

    console.log(`Price: ${wei.toString()} Decimals: ${decimals.toString()}`)
    runInAction(() => {
      this.assetPriceWei = wei
    })

    console.log(`1 ${this.symbol} = ${this.assetPriceEth} ETH`)
  }

  async fetchAssetUsdPrice() {
    const [wei, decimals] = (await this.root.eth.priceOracle.getAssetUSDPrice(
      this.tokenAddress,
    )) as [BigNumber, BigNumber]

    console.log(`Price: ${wei.toString()} Decimals: ${decimals.toString()}`)
    runInAction(() => {
      this.assetPriceUsdBig = wei
      this.assetPriceUsdDecimals = decimals
    })

    console.log(`1 ${this.symbol} = ${this.assetPriceUsd} USD`)
  }

  async fetchAssetTotalSupply() {
    const wei = await this.contract.totalReserve()

    runInAction(() => {
      this.assetTotalSupply = wei
    })
    console.log(`Supply: ${wei.toString()} WEI ${this.assetTotalSupply} ETH`)
  }

  async fetchAssetBorrowedSupply() {
    const wei = await this.contract.totalBorrowed()

    runInAction(() => {
      this.assetBorrowedSupply = wei
    })

    console.log(
      `Borrowed: ${wei.toString()} WEI ${this.assetBorrowedSupply} ETH`,
    )
  }

  async fetchActiveLoans() {
    await this.fetchLoans()
    await this.fetchLoanData()
  }

  async fetchLoans() {
    const addresses: string[] = await this.contract.getLoansPools()
    runInAction(() => {
      this.loans = addresses.map(
        (address) =>
          new LoanStore({root: this.root, pool: this, loanAddress: address}),
      )
    })
  }

  async fetchLoanData() {
    const {loans} = this
    if (!loans) return
    await Promise.all(loans.map((loan) => loan.fetchData()))
  }

  async fetchMinimumBorrowPeriodDays() {
    runInAction(() => {
      this.assetMinimumBorrowPeriodDays = 7
    })
  }
}
