import { Transaction } from './../../models/Transaction';
import { MoneyAccount } from './../../models/MoneyAccount';
import { TransactionPopulated } from '../../models/Transaction';
import { RootState } from './../store';
import { transactionAdapter } from './transactionAdapter';
import { isTransactionPopulated, populateTransaction } from './transactionHelpers';

const transactionSelectors = transactionAdapter.getSelectors<RootState>(state => state.transaction);

export const selectAllTransaction = (state: RootState): TransactionPopulated[] => {
  return transactionSelectors.selectAll(state)
    .map(transaction => populateTransaction(transaction, state))
    .filter(isTransactionPopulated)
}

export const selectTransactionById = (id: Transaction['id']) => 
(state: RootState): Transaction | undefined => 
transactionSelectors.selectById(state, id)

export const selectTransactionByAccountId = (state: RootState, id: MoneyAccount['id']): TransactionPopulated[] => {
  return transactionSelectors.selectAll(state)
    .filter(transaction => transaction.accountId === id)
    .map(transaction => populateTransaction(transaction, state))
    .filter(isTransactionPopulated)
}