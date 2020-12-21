import { MoneyAccount, MoneyAccountPopulated } from './MoneyAccount';

export interface Transaction {
  id: string,
  amount: number,
  // type: 'expense' | 'income'
  note?: string,
  accountId: MoneyAccount['id'],
}

export type TransactionPopulated = Omit<Transaction, 'accountId'> & {
  account: MoneyAccountPopulated | undefined,
}
