import React, { useCallback, useRef } from 'react';
import { FaTimes } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { Page } from '../../components/Page/Page';
import { Account } from '../../models/Account';
import { UIDService } from '../../services/UIDService';
import { selectAllAccount } from '../../store/account/accountSelectors';
import { addAccount, deleteAccount } from '../../store/account/accountSlice';
import { selectAllCurrency } from '../../store/currency/currencySelectors';

export function AccountsPage() {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAllAccount);
  const currencies = useSelector(selectAllCurrency);

  const newAccountNameRef = useRef<HTMLInputElement>(null);
  const newAccountCurrencyRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const accountName = newAccountNameRef.current?.value;
    if (!accountName || accountName.length === 0) {
      return;
    }
    const accountCurrency = newAccountCurrencyRef.current?.value;
    if (!accountCurrency) {
      return;
    }
    dispatch(addAccount({
      id: UIDService.generate(),
      name: accountName,
      currency: accountCurrency,
      balance: 0
    }));
    if (newAccountNameRef.current) {
      newAccountNameRef.current.value = '';
    }
  }, [newAccountNameRef, dispatch]);

  const handleDeleteClick = useCallback((account: Account) => {
    dispatch(deleteAccount(account.id))
  }, [])

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

      <form onSubmit={handleSubmit}>
        <input ref={newAccountNameRef} type="text" />
        <select ref={newAccountCurrencyRef}>
          {
            currencies.map(currency =>
              <option key={currency.id} value={currency.id}>
                {currency.name}
              </option>
            )
          }
        </select>
        <Button type="submit" text="Add" />
      </form>

    </Page>
  )
}