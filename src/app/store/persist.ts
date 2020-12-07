import { RootState } from './store';

export function persistStoreState(store: any) {
  store.subscribe(() => {
    localStorage.setItem('Money Tracker State', JSON.stringify(store.getState()))
  })
}
export function fetchStoreState(): any {
  let state = localStorage.getItem('Money Tracker State');
  state = state ? JSON.parse(state): null
  return state;
}