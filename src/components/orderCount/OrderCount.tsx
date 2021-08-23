import React, { FC } from 'react';
import './OrderCount.styles.scss';

interface IProps {
  count: number;
}

const OrderCount: FC<IProps> = ({ count }) => {
  return <div className='count-pill'>{count > 99 ? '99+' : count}</div>;
};

export default OrderCount;
