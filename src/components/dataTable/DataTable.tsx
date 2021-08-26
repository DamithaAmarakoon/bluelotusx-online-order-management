import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { v4 } from 'uuid';
import { useMediaQuery } from 'react-responsive';
import GLOBAL_MEDIA_QUERIES from '../../config/globalMediaQueries';

// styles
import styles from './DataTable.module.scss';

// icons
import PrintIcon from '@material-ui/icons/Print';
import ConfirmButton from '../confirmButton/ConfirmButton';

interface IProps {
  orders: any;
  selectedItem: any;
  selectItem: (order: any) => void;
}

const DataTable: FC<IProps> = ({
  orders,
  selectedItem,
  selectItem,
}): JSX.Element => {
  const isTablet = useMediaQuery({ query: GLOBAL_MEDIA_QUERIES.tab });

  return (
    <Table size='sm' hover>
      <thead>
        <tr id={styles.table_head}>
          <th>Order ID</th>
          <th>Location</th>
          <th className='text-center'>Placed At</th>
          <th className='text-center'>Quantity</th>
          <th className='text-center'>Amount</th>
          <th className='text-center'>Quick Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order: any) => (
          <tr
            id={selectedItem.id === order.id ? styles.selected_row : styles.row}
            key={v4()}
            onClick={() => selectItem(order)}
          >
            <td>
              <div className={styles.order_id}>{order.id}</div>
            </td>
            <td>{order.location}</td>
            <td className={styles.placed_at}>{order.placed_at}</td>
            <td className={styles.order_quantity}>{order.quantity}</td>
            <td className={styles.total_amount}>{order.total}</td>
            <td className={styles.quick_actions}>
              <PrintIcon
                fontSize='medium'
                onClick={(e) => {
                  e.preventDefault();
                }}
                className={styles.print_button}
              />
              <ConfirmButton
                classNames={
                  !isTablet && window.innerWidth < 1440 ? 'w-75' : 'w-50'
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
