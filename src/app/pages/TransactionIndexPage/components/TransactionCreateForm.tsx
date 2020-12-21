import React, { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { Transaction } from '../../../models/Transaction';
import { UIDService } from '../../../services/UIDService';
import { selectAllAccount } from '../../../store/account/accountSelectors';

interface Props {
  onSubmit: (e: Transaction) => void
}

export function TransactionCreateForm(props: Props) {
  const accountRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);

  const accounts = useSelector(selectAllAccount);

  const [currentAccount, setCurrentAccount] = useState<typeof accounts[0]>();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const inputs = getInputs();
    if (!inputs) {
      return;
    }

    const transaction: Transaction = {
      id: UIDService.generate(),
      amount: inputs.amount,
      accountId: inputs.accountId
    }
    props.onSubmit(transaction);
    resetForm();
  }, [accountRef, amountRef]);


  function getInputs() {
    const accountId = accountRef.current?.value;
    const amount = amountRef.current?.value;
    if (!amount || amount.length === 0 || !accountId) {
      return;
    }
    return { accountId, amount: +amount };
  }

  function resetForm() {
    if (amountRef.current) {
      amountRef.current.value = '';
    }
  }

  const handleAccountChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentAccount(accounts.find(account => account.id === e.target.value))
  }, [accounts]);

  return (
    <form onSubmit={handleSubmit}>
      <select ref={accountRef} onChange={handleAccountChange}>
        <option hidden>Select account</option>
        {
          accounts.map(account =>
            <option key={account.id} value={account.id} >
              {account.name} ({account.currency?.name})
            </option>
          )
        }
      </select>
      <input ref={amountRef} type="number" />
      {currentAccount?.currency?.name}
      <Button type="submit" text="Add" />
    </form>
  )
}