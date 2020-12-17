import { Account } from './../../models/Account';
import { RootState } from '../store';
import { accountAdapter } from './accountAdapter';

const accountSelectors = accountAdapter.getSelectors();

export const selectAllAccount = (state: RootState): Account[] => {
  return accountSelectors.selectAll(state.account)
    .map(account => ({
      ...account,
      currency: state.currency.entities[account.currency]
    }))
}