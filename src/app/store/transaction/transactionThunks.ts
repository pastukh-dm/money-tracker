import { selectTransactionByAccountId, selectTransactionById } from './transactionSelectors';
import { Dispatch } from '@reduxjs/toolkit';
import { Transaction } from '../../models/Transaction';
import { updateAccount } from '../account/accountSlice';
import { store } from '../store';
import { addTransaction, deleteTransaction } from './transactionSlice';
import { calculateAccountBalance } from '../account/accountHelpers';
import { isTransaction } from './transactionHelpers';


export function addTransactionAndUpdateAccount(payload: Transaction) {
  return async (dispatch: Dispatch, getState: typeof store.getState) => {
    await dispatch(addTransaction(payload));
    const balance = calculateAccountBalance(payload.accountId, getState());
    await dispatch(updateAccount({ id: payload.accountId, changes: { balance: balance } }));
  }
}

export function deleteTransactionAndUpdateAccount(payload: Transaction['id']) {
  return async (dispatch: Dispatch, getState: typeof store.getState) => {
    const transaction = selectTransactionById(payload)(getState());
    await dispatch(deleteTransaction(payload));
    if (isTransaction(transaction)) {
      const balance = calculateAccountBalance(transaction.accountId, getState());
      await dispatch(updateAccount({ id: transaction.accountId, changes: { balance } }));
    }
  }
}