import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Page } from '../../components/Page/Page';
import { MoneyAccount, AccountRaw } from '../../models/MoneyAccount';
import { selectAllAccount } from '../../store/account/accountSelectors';
import { addAccount, deleteAccount } from '../../store/account/accountSlice';
import { AccountCreateForm } from './components/AccountCreateForm';
import { AccountList } from './components/AccountList';

export function AccountIndexPage() {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAllAccount);

  const handleSubmit = useCallback(
    (e: AccountRaw) => dispatch(addAccount(e)), [dispatch]
  );

  const handleDeleteClick = useCallback(
    (account: MoneyAccount) => dispatch(deleteAccount(account.id)), [dispatch]
  );

  return (
    <Page>
      <h1>Accounts</h1>
      <AccountList items={accounts} onDelete={handleDeleteClick}/>
      <AccountCreateForm onSubmit={handleSubmit} />
    </Page>
  )
}