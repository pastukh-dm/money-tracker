import React from 'react';
import { Page } from '../../components/Page/Page';
import { ExpensesTable } from './components/ExpensesTable/ExpensesTable';

export function ExpensesPage() {
  return (
    <Page>
      <h1>Expenses</h1>
      <ExpensesTable />
    </Page>
  );
}