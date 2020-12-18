import React from 'react';
import { Page } from '../../components/Page/Page';
import { TransactionCreateForm } from './components/TransactionCreateForm';
import { TransactionList } from './components/TransactionList';

export function TransactionIndexPage() {
  return (
    <Page>
      <h1>Transactions</h1>

      <TransactionList/>
      <TransactionCreateForm/>
    </Page>
  );
}