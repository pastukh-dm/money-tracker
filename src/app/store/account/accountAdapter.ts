import { AccountRaw } from './../../models/Account';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const accountAdapter = createEntityAdapter<AccountRaw>({})