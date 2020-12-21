import { Transaction } from './../../models/Transaction';
import { transactionAdapter } from './transactionAdapter';
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { store } from '../store';

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState: transactionAdapter.getInitialState(),
  reducers: {
    addTransaction: transactionAdapter.addOne,
    deleteTransaction: transactionAdapter.removeOne
  }
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;