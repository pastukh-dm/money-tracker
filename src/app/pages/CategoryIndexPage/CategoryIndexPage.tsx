import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { Page } from '../../components/Page/Page';
import { Currency } from '../../models/Currency';
import { UIDService } from '../../services/UIDService';
import { selectAllCurrency } from '../../store/currency/currencySelectors';
import { addCurrency, deleteCurrency } from '../../store/currency/currencySlice';

import { FaTimes } from 'react-icons/all';
import { CategoryCreateForm } from './components/CategoryCreateForm';
import { CategoryList } from './components/CategoryList';
import { Category } from '../../models/Category';
import { addCategory, deleteCategory } from '../../store/category/categorySlice';
import { selectAllCategory } from '../../store/category/categorySelectors';

export function CategoryIndexPage() {
  const dispatch = useDispatch();
  const allCategory = useSelector(selectAllCategory);

  const handleCreate = useCallback(
    (e: Category) => dispatch(addCategory(e)),
    [dispatch]
  )

  const handleDelete = useCallback(
    (e: Category) => dispatch(deleteCategory(e.id)),
    [dispatch]
  )

  return (
    <Page>
      <h1>Categories</h1>

      {/* <ul>
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

      */}
      <CategoryCreateForm onSubmit={handleCreate} />
      <CategoryList items={allCategory} onDelete={handleDelete} />
    </Page>
  )
}