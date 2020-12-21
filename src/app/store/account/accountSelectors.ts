import { MoneyAccount, MoneyAccountPopulated } from './../../models/MoneyAccount';
import { RootState } from '../store';
import { accountAdapter } from './accountAdapter';
import { populateAccount, isAccountPopulated } from './accountHelpers';

const accountSelectors = accountAdapter.getSelectors<RootState>(state => state.account);

export const selectAllAccount = (state: RootState): MoneyAccountPopulated[] => {
  return accountSelectors.selectAll(state)
    .map(account => populateAccount(account, state))
    .filter(isAccountPopulated)
}

export const selectAccountById = (id: MoneyAccount['id']) =>
  (state: RootState): MoneyAccount | undefined =>
    accountSelectors.selectById(state, id);