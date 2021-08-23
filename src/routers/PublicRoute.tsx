import React, { FC } from 'react';
import { Route } from 'react-router-dom';

interface IProps {
  component: () => JSX.Element;
  exact: boolean;
  path: string;
}

const PublicRoute: FC<IProps> = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route {...rest} component={(props: any) => <Component {...props} />} />
    </>
  );
};

export default PublicRoute;
