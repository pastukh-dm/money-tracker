import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../components/Page/Page';
import { Transaction, TransactionPopulated } from '../../models/Transaction';
import { selectAllTransaction } from '../../store/transaction/transactionSelectors';
import { deleteTransaction } from '../../store/transaction/transactionSlice';
import { addTransactionAndUpdateAccount, deleteTransactionAndUpdateAccount } from '../../store/transaction/transactionThunks';
import { TransactionCreateForm } from './components/TransactionCreateForm';
import { TransactionList } from './components/TransactionList';

export function TransactionIndexPage() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransaction);

  const handleSubmit = useCallback(
    (e: Transaction) => dispatch(addTransactionAndUpdateAccount(e)), [dispatch]
  );

  const handleDelete = useCallback(
    (transaction: TransactionPopulated) => dispatch(deleteTransactionAndUpdateAccount(transaction.id)), [dispatch]
  );

  return (
    <Page>
      <h1>Transactions</h1>
      <TransactionCreateForm onSubmit={handleSubmit}/>
      <hr/>
      <TransactionList items={transactions} onDelete={handleDelete}/>
    </Page>
  );
}