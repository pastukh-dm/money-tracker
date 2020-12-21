import { Currency } from './Currency';

export interface MoneyAccount {
  id: string,
  name: string,
  currencyId: Currency['id'],
  balance: number
}

export type MoneyAccountPopulated = Omit<MoneyAccount, 'currencyId'> & {
  currency: Currency | undefined,
}
