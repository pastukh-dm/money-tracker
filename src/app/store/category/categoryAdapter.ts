import { Category } from './../../models/Category';
import { createEntityAdapter } from '@reduxjs/toolkit';

export const categoryAdapter = createEntityAdapter<Category>({})