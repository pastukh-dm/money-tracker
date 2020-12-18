import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { AccountRaw } from '../../../models/MoneyAccount';
import { UIDService } from '../../../services/UIDService';
import { selectAllCurrency } from '../../../store/currency/currencySelectors';


interface Props {
  onSubmit: (e: AccountRaw) => void
}


export function AccountCreateForm(props: Props) {
  const newAccountNameRef = useRef<HTMLInputElement>(null);
  const newAccountCurrencyRef = useRef<HTMLSelectElement>(null);

  const currencies = useSelector(selectAllCurrency);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const inputs = getAccountInputs();
    if (!inputs) {
      return;
    }
    if (newAccountNameRef.current) {
      newAccountNameRef.current.value = '';
    }
    const account: AccountRaw = {
      id: UIDService.generate(),
      name: inputs.name,
      currency: inputs.currency,
      balance: 0
    }
    props.onSubmit(account);
  }, [newAccountNameRef]);

  function getAccountInputs() {
    const name = newAccountNameRef.current?.value;
    const currency = newAccountCurrencyRef.current?.value;
    if (!name || name.length === 0 || !currency) {
      return;
    }
    return { name, currency }
  }

  
  return (
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
  )
}