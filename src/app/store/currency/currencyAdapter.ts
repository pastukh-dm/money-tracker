import { createEntityAdapter } from '@reduxjs/toolkit';
import { Currency } from '../../models/Currency';

export const currencyAdapter = createEntityAdapter<Currency>({})