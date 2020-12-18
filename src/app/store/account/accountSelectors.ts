import { MoneyAccount } from '../../models/MoneyAccount';
import { RootState } from '../store';
import { accountAdapter } from './accountAdapter';

const accountSelectors = accountAdapter.getSelectors();

export const selectAllAccount = (state: RootState): MoneyAccount[] => {
  return accountSelectors.selectAll(state.account)
    .map(account => ({
      ...account,
      currency: state.currency.entities[account.currency]
    }))
}