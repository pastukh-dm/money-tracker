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
  const accountRef = useRef<HTMLSelectElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);


  const [inputs, setInputs] = useState({
    accountId: '',
    amount: 0,
    note: '',
    date: '',
  })
  const accounts = useSelector(selectAllAccount);
  const [currentAccount, setCurrentAccount] = useState<typeof accounts[0]>();
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() =>
    setIsFormValid(
      inputs.accountId.length > 0 &&
      inputs.amount !== 0
    ),
    [inputs.accountId, inputs.amount]
  );

  useEffect(() => {
    if (accountRef.current?.value) {
      // console.log(accountRef.current?.value)
      const nextCurrentAccount = accounts.find(account => account.id === accountRef.current?.value);
      setCurrentAccount(nextCurrentAccount);
      setInputs(prev => ({ ...prev, accountId: nextCurrentAccount?.id || '' }))
    }
  }, [accountRef.current?.value])

  useEffect(() =>
    setInputs(prev => ({ ...prev, date: dateRef.current?.value || '' })),
    [dateRef.current?.value]
  )


  const handleInputChange = useCallback((key: keyof typeof inputs, value) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }, [setInputs])


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


  return (
    <form className="TransactionCreateForm" onSubmit={handleSubmit}>
      {
        accounts && accounts.length > 0 &&
        <div className="TransactionCreateForm-Field">
          <select
            ref={accountRef}
            defaultValue={accounts[0].id}
          >
            <option value="" hidden>Select account</option>
            {
              accounts.map(account =>
                <option key={account.id} value={account.id} >
                  {account.name} ({account.currency?.name})
            </option>
              )
            }
          </select>
        </div>
      }
      <div className="TransactionCreateForm-Field">
        <input
          ref={amountRef}
          type="number"
          placeholder="Amount"
          defaultValue="0"
          step=".01"
          onChange={(e) => handleInputChange('amount', +e.target.value)}
        />
        {currentAccount?.currency?.name}
      </div>
      <div className="TransactionCreateForm-Field">
        <input
          ref={noteRef}
          type="text"
          placeholder="Note"
          onChange={(e) => handleInputChange('note', e.target.value)}
        />
      </div>

      <div className="TransactionCreateForm-Field">
        <input
          ref={dateRef}
          type="date"
          placeholder="Date"
          defaultValue={new Date().toISOString().substring(0, 10)}
          onChange={(e) => handleInputChange('date', e.target.value)}
        />
      </div>
      <Button
        type="submit"
        text="Add"
        disabled={!isFormValid}
      />
      {JSON.stringify(inputs)}
    </form>
  )
}