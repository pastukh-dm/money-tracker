import { RootState } from '../store';
import { currencyAdapter } from './currencyAdapter';

const currencySelectors = currencyAdapter.getSelectors();

export const selectAllCurrency = (state: RootState) => currencySelectors.selectAll(state.currency)