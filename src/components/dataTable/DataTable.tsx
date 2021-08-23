import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { v4 } from 'uuid';

// styles
import './DataTable.styles.scss';

// icons
import BookmarkIcon from '@material-ui/icons/Bookmark';

interface IProps {
  orders: any;
  selectedItem: any;
  setSelectedItem: any;
}

const DataTable: FC<IProps> = ({
  orders,
  selectedItem,
  setSelectedItem,
}): JSX.Element => {
  return (
    <Table size='sm' responsive hover>
      <thead>
        <tr id='table-head'>
          <th>Order ID</th>
          <th>Location</th>
          <th>Placed At</th>
          <th className='text-center'>Status</th>
          <th>Rider Status</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: any) => (
          <tr
            id={selectedItem.id === order.id ? 'selected-row' : 'row'}
            onClick={() => setSelectedItem(order)}
            key={v4()}
          >
            <td>
              <div className='order-id'>
                <BookmarkIcon fontSize='small' />
                {order.id}
              </div>
            </td>
            <td>{order.location}</td>
            <td>{order.placed_at}</td>
            <td className='table-order-status'>
              <span>{order.status}</span>
            </td>
            <td>{order.riderStatus}</td>
            <td>{order.total}</td>
            <td className='food-status'>
              <span>Food Ready</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
