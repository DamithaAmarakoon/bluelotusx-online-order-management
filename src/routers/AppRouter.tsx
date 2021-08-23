import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// routers
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// components
import OrdersPage from '../components/ordersPage/OrdersPage';
import LoginPage from '../components/loginPage/LoginPage';
import Dashboard from '../components/dashboard/Dashboard';

const AppRouter = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/orders' component={OrdersPage} />
        <PublicRoute exact path='/login' component={LoginPage} />
        <Redirect to='/orders' />
      </Switch>
    </Router>
  );
};

export default AppRouter;
