import { RootState } from '../store';
import { categoryAdapter } from './categoryAdapter';

const categorySelectors = categoryAdapter.getSelectors();

export const selectAllCategory = (state: RootState) => categorySelectors.selectAll(state.category)