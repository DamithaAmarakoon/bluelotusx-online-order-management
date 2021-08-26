import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { logoutUser, userLogin } from './actions/auth/auth';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// styles
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

let hasRendered = false;

const renderApp = (): void => {
  if (!hasRendered) {
    const access_token = localStorage.getItem('user_accessToken');
    if (access_token) {
      store.dispatch(userLogin(jwt.verify(access_token, 'secret')));
    } else {
      store.dispatch(logoutUser());
    }

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
