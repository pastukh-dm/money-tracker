import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { Input } from '../../../components/Input/Input';
import { MoneyAccount } from '../../../models/MoneyAccount';
import { UIDService } from '../../../services/UIDService';
import { selectAllCurrency } from '../../../store/currency/currencySelectors';


interface Props {
  onSubmit: (e: MoneyAccount) => void
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
    
    const account: MoneyAccount = {
      id: UIDService.generate(),
      name: inputs.name,
      currencyId: inputs.currency,
      balance: 0
    }
    props.onSubmit(account);
    resetForm();
  }, [newAccountNameRef]);

  function getAccountInputs() {
    const name = newAccountNameRef.current?.value;
    const currency = newAccountCurrencyRef.current?.value;
    if (!name || name.length === 0 || !currency) {
      return;
    }
    return { name, currency };
  }

  function resetForm() {
    if (newAccountNameRef.current) {
      newAccountNameRef.current.value = '';
    }
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <Input ref={newAccountNameRef} type="text" />
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
  );
}