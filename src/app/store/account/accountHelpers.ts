import { MoneyAccount, MoneyAccountPopulated } from '../../models/MoneyAccount';
import { RootState } from '../store';
import { selectTransactionByAccountId } from '../transaction/transactionSelectors';



export const isAccountPopulated = (account: any): account is MoneyAccountPopulated => {
  return account !== undefined && 'currency' in account;
}

export function populateAccount(account: MoneyAccount | undefined, state: RootState): MoneyAccountPopulated | undefined {
  return account ?
    {
      ...account,
      currency: state.currency.entities[account.currencyId],
    }
    : undefined;
}

export function calculateAccountBalance(id: MoneyAccount['id'], state: RootState) {
  return selectTransactionByAccountId(state, id).reduce((res, transaction) => res + transaction.amount, 0)
}