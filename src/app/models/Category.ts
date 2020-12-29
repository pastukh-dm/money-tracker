export interface Category {
  id: string,
  name: string,
  type: CategoryType
}

export enum CategoryType {
  Expense = 'expense',
  Income = 'income',
  Transfer = 'transfer',
}