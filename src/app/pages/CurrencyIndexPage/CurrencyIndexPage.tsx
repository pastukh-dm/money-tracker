import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { Page } from '../../components/Page/Page';
import { Currency } from '../../models/Currency';
import { UIDService } from '../../services/UIDService';
import { selectAllCurrency } from '../../store/currency/currencySelectors';
import { addCurrency, deleteCurrency } from '../../store/currency/currencySlice';

import { FaTimes } from 'react-icons/all';

export function CurrencyIndexPage() {
  const dispatch = useDispatch();
  const allCurrency = useSelector(selectAllCurrency);

  const newCurrencyNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const currencyName = newCurrencyNameRef.current?.value;
    if (!currencyName || currencyName.length === 0) {
      return;
    }
    dispatch(addCurrency({
      id: UIDService.generate(),
      name: currencyName
    }));
    if (newCurrencyNameRef.current) {
      newCurrencyNameRef.current.value = '';
    }
  }, [newCurrencyNameRef, dispatch])

  const handleDeleteClick = useCallback((currency: Currency) => {
    dispatch(deleteCurrency(currency.id))
  }, [])

  return (
    <Page>
      <h1>Currencies</h1>

      <ul>
        {
          allCurrency.map(currency =>
            <li key={currency.id}>
              {currency.name}
              {' '}
              <Button
                variant="pure-danger"
                icon={<FaTimes />}
                onClick={() => handleDeleteClick(currency)}
              />
            </li>
          )
        }

      </ul>

      <form onSubmit={handleSubmit}>
        <input ref={newCurrencyNameRef} type="text" />
        <Button type="submit" text="Add"/>
      </form>

    </Page>
  )
}