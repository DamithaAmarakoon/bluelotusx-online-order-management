import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

interface IProps {
  component: () => JSX.Element;
  exact: boolean;
  path: string;
}

const PrivateRoute: FC<IProps> = ({ component: Component, ...rest }) => {
  const isAuthenticated = true;

  return isAuthenticated ? (
    <>
      <Route {...rest} component={(props: any) => <Component {...props} />} />
    </>
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
