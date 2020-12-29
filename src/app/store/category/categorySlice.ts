import { categoryAdapter } from './categoryAdapter';
import { createSlice } from '@reduxjs/toolkit';
export const categorySlice = createSlice({
  name: 'category',
  initialState: categoryAdapter.getInitialState(),
  reducers: {
    addCategory: categoryAdapter.addOne,
    deleteCategory: categoryAdapter.removeOne
  }
});

export const { addCategory, deleteCategory } = categorySlice.actions;