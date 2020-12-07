import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './currency/currencySlice';
import { fetchStoreState, persistStoreState } from './persist';

const preloadedState = fetchStoreState() || undefined;

export const store = configureStore({
  preloadedState: preloadedState,
  reducer: {
    currency: currencySlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>;


persistStoreState(store);