import { AccountRaw } from '../../models/MoneyAccount';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const accountAdapter = createEntityAdapter<AccountRaw>({})