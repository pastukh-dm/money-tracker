import React, { useCallback } from 'react';
import { FaTimes } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { Page } from '../../components/Page/Page';
import { Account, AccountRaw } from '../../models/Account';
import { selectAllAccount } from '../../store/account/accountSelectors';
import { addAccount, deleteAccount } from '../../store/account/accountSlice';
import { AccountCreateForm } from './components/AccountCreateForm';

export function AccountIndexPage() {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAllAccount);

  const handleSubmit = useCallback(
    (e: AccountRaw) => dispatch(addAccount(e)), [dispatch]
  );

  const handleDeleteClick = useCallback(
    (account: Account) => dispatch(deleteAccount(account.id)), [dispatch]
  );

  return (
    <Page>
      <h1>Accounts</h1>

      <table>
        <tbody>
          {
            accounts.map(account =>
              <tr key={account.id}>
                <th>{account.name}</th>
                <td>{account.balance} {account.currency?.name}</td>
                <td>
                  <Button
                    variant="pure-danger"
                    icon={<FaTimes />}
                    onClick={() => handleDeleteClick(account)}
                  />
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

      <AccountCreateForm onSubmit={handleSubmit} />
    </Page>
  )
}