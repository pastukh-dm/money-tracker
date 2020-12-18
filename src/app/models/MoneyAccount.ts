import { Currency } from './Currency';

export interface MoneyAccount {
  id: string,
  name: string,
  currency: Currency | undefined,
  balance: number
}

export type AccountRaw = Omit<MoneyAccount, 'currency'> & {
  currency: Currency['id'],
}
