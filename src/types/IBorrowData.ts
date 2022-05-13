import {BigNumber} from 'ethers'

export interface IBorrowData {
  /* address of the owner of the Borrow (by being owner of the PalLoanToken) */
  _borrower: string
  /* address of the recipient of the voting power */
  _delegatee: string
  /* address of the PalLoan for this Borrow */
  _loanPool: string
  /* id of the PalLoanToken for this PalLoan */
  _palLoanTokenId: BigNumber
  /* amount of token borrowed for delegation */
  _amount: BigNumber
  /* address of the governance token */
  _underlying: string
  /* amount of fees paid by the borrower */
  _feesAmount: BigNumber
  /* amount of fees already used by the Borrow */
  _feesUsed: BigNumber
  /* block where the Borrow was started */
  _startBlock: BigNumber
  /* ‘false’ if the Borrow is still active */
  _closed: boolean
  /* 'true' if the Borrow was killed */
  _killed: boolean
}
