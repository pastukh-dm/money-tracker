import { Transaction, TransactionPopulated } from '../../models/Transaction';
import { populateAccount } from '../account/accountHelpers';
import { RootState } from '../store';



export const isTransactionPopulated = (transaction: any): transaction is TransactionPopulated => {
  return transaction !== undefined && 'account' in transaction;
}
export const isTransaction = (transaction: any): transaction is Transaction => {
  return transaction !== undefined && 'accountId' in transaction;
}

export function populateTransaction(transaction: Transaction | undefined, state: RootState): TransactionPopulated | undefined {
  return transaction ?
    { ...transaction, account: populateAccount(state.account.entities[transaction.accountId], state) }
    : undefined;
}

// export function 