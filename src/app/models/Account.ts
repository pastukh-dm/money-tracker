import { Currency } from './Currency';

export interface Account {
  id: string,
  name: string,
  currency: Currency | undefined,
  balance: number
}

export type AccountRaw = Omit<Account, 'currency'> & {
  currency: Currency['id'],
}
