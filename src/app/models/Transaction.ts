import { MoneyAccount, MoneyAccountPopulated } from './MoneyAccount';

export interface Transaction {
  id: string,
  amount: number,
  date: string, // ISO format
  note?: string,
  accountId: MoneyAccount['id'],
}

export type TransactionPopulated = Omit<Transaction, 'accountId'> & {
  account: MoneyAccountPopulated | undefined,
}
