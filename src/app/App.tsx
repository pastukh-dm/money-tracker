import React from 'react';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { CurrenciesPage } from './pages/CurrenciesPage/CurrenciesPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AccountIndexPage } from './pages/AccountIndexPage/AccountIndexPage';
import { TransactionIndexPage } from './pages/TransactionIndexPage/TransactionIndexPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
              <li>
                <Link to="/currencies">Currencies</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/transactions">
              <TransactionIndexPage />
            </Route>
            <Route path="/accounts">
              <AccountIndexPage />
            </Route>
            <Route path="/currencies">
              <CurrenciesPage />
            </Route>
          </Switch>

        </div>
      </BrowserRouter>
    </Provider>
  );
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.tsx</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;
