import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../components/Button/Button';
import { Transaction } from '../../../models/Transaction';
import { UIDService } from '../../../services/UIDService';
import { selectAllAccount } from '../../../store/account/accountSelectors';

interface Props {
  onSubmit: (e: Transaction) => void
}

export function TransactionCreateForm(props: Props) {
  const [inputs, setInputs] = useState({
    accountId: '',
    amount: 0,
    note: '',
    date: '',
  })
  const accountRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const accounts = useSelector(selectAllAccount);

  const [currentAccount, setCurrentAccount] = useState<typeof accounts[0]>();
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    setIsFormValid(
      inputs.accountId.length > 0 &&
      inputs.amount !== 0
    );
  }, [inputs.accountId, inputs.amount]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    const transaction: Transaction = {
      id: UIDService.generate(),
      amount: inputs.amount,
      date: new Date(inputs.date).toISOString(),
      accountId: inputs.accountId,
    }
    props.onSubmit(transaction);
    resetForm();
  }, [inputs.amount, inputs.accountId]);


  function resetForm() {
    if (amountRef.current) {
      amountRef.current.value = '';
    }
  }

  const handleAccountChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextCurrentAccount = accounts.find(account => account.id === e.target.value);
    setCurrentAccount(nextCurrentAccount);
    setInputs(prev => ({ ...prev, accountId: nextCurrentAccount?.id || '' }))
  }, [accounts]);

  const handleInputChange = useCallback((key: keyof typeof inputs, value) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }, [setInputs])

  return (
    <form onSubmit={handleSubmit}>
      <select ref={accountRef} onChange={handleAccountChange}>
        <option value="" hidden>Select account</option>
        {
          accounts.map(account =>
            <option key={account.id} value={account.id} >
              {account.name} ({account.currency?.name})
            </option>
          )
        }
      </select>
      <input ref={amountRef} type="number" placeholder="Amount" onChange={(e) => handleInputChange('amount', +e.target.value)} />
      {currentAccount?.currency?.name}
      <input ref={noteRef} type="text" placeholder="Note" onChange={(e) => handleInputChange('note', e.target.value)} />
      <input ref={dateRef} type="date" placeholder="Date" onChange={(e) => handleInputChange('date', e.target.value)} />
      {JSON.stringify(inputs)}
      <Button type="submit" text="Add" disabled={!isFormValid} />
    </form>
  )
}