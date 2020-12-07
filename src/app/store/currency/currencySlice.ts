import { currencyAdapter } from './currencyAdapter';
import { createSlice } from '@reduxjs/toolkit';
export const currencySlice = createSlice({
  name: 'currency',
  initialState: currencyAdapter.getInitialState(),
  reducers: {
    addCurrency: currencyAdapter.addOne,
    deleteCurrency: currencyAdapter.removeOne
  }
});

export const { addCurrency, deleteCurrency } = currencySlice.actions;