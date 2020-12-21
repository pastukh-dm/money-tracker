import { MoneyAccount } from './../../models/MoneyAccount';
import { createSlice } from '@reduxjs/toolkit';
import { selectAllTransaction, selectTransactionByAccountId } from '../transaction/transactionSelectors';
import { accountAdapter } from './accountAdapter';
export const accountSlice = createSlice({
  name: 'account',
  initialState: accountAdapter.getInitialState(),
  reducers: {
    addAccount: accountAdapter.addOne,
    deleteAccount: accountAdapter.removeOne,
    updateAccount: accountAdapter.updateOne,
  }
});

export const { addAccount, deleteAccount, updateAccount} = accountSlice.actions;