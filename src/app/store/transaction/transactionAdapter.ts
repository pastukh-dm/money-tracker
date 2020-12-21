import { Transaction } from './../../models/Transaction';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const transactionAdapter = createEntityAdapter<Transaction>({})