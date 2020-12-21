import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../components/Page/Page';
import { MoneyAccount, MoneyAccountPopulated } from '../../models/MoneyAccount';
import { selectAllAccount } from '../../store/account/accountSelectors';
import { addAccount, deleteAccount } from '../../store/account/accountSlice';
import { AccountCreateForm } from './components/AccountCreateForm';
import { AccountList } from './components/AccountList';


export function AccountIndexPage() {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAllAccount);

  const handleSubmit = useCallback(
    (e: MoneyAccount) => dispatch(addAccount(e)), [dispatch]
  );

  const handleDelete = useCallback(
    (account: MoneyAccountPopulated) => dispatch(deleteAccount(account.id)), [dispatch]
  );


  return (
    <Page>
      <h1>Accounts</h1>
      <AccountList items={accounts} onDelete={handleDelete}/>
      <AccountCreateForm onSubmit={handleSubmit} />
    </Page>
  )
}