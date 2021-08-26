import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import IRootState from '../interfaces/rootState';
import { useSelector } from 'react-redux';

interface IProps {
  component: () => JSX.Element;
  exact: boolean;
  path: string;
}

const PublicRoute: FC<IProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(
    (state: IRootState) => !!state.auth.user.id
  );

  return isAuthenticated ? (
    <Redirect to='/' />
  ) : (
    <Route {...rest} component={Component} />
  );
};

export default PublicRoute;
