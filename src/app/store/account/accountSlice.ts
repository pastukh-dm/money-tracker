import { createSlice } from '@reduxjs/toolkit';
import { accountAdapter } from './accountAdapter';
export const accountSlice = createSlice({
  name: 'account',
  initialState: accountAdapter.getInitialState(),
  reducers: {
    addAccount: accountAdapter.addOne,
    deleteAccount: accountAdapter.removeOne
  }
});

export const { addAccount, deleteAccount } = accountSlice.actions;