import './App.scss';

import React, { useMemo } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CurrencyIndexPage } from './pages/CurrencyIndexPage/CurrencyIndexPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AccountIndexPage } from './pages/AccountIndexPage/AccountIndexPage';
import { TransactionIndexPage } from './pages/TransactionIndexPage/TransactionIndexPage';
import { CategoryIndexPage } from './pages/CategoryIndexPage/CategoryIndexPage';
import { Navbar } from './components/Navbar/Navbar';

const routeItems = [
  { path: "/transactions", name: 'Transactions', page: <TransactionIndexPage /> },
  { path: "/categories", name: 'Categories', page: <CategoryIndexPage /> },
  { path: "/accounts", name: 'Accounts', page: <AccountIndexPage /> },
  { path: "/currencies", name: 'Currencies', page: <CurrencyIndexPage /> },
]

function App() {
  const navbarItems = useMemo(
    () => routeItems.map(item => ({ to: item.path, name: item.name })),
    []
  );
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar items={navbarItems} />

          <Switch>
            {
              routeItems.map(item =>
                <Route key={item.path} path={item.path}>
                  {item.page}
                </Route>
              )
            }
          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
