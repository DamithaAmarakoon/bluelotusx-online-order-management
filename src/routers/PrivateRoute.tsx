import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IRootState from '../interfaces/rootState';

interface IProps {
  component: () => JSX.Element;
  exact: boolean;
  path: string;
}

const PrivateRoute: FC<IProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    (state: IRootState) => !!state.auth.user.id
  );

  return isAuthenticated ? (
    <>
      <Route {...rest} component={Component} />
    </>
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
