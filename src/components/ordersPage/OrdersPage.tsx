import React, { useState } from 'react';
import moment from 'moment';
import { v4 } from 'uuid';
import cx from 'classnames';

// styles
import styles from './OrdersPage.module.scss';

// config
import orderStatus from '../../config/orderStatus';
import riderStatus from '../../config/riderStatus';
import orderType from '../../config/orderType';

// components
import OrderCount from '../orderCount/OrderCount';
import DataTable from '../dataTable/DataTable';

// icons
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import OrderDetails from '../orderDetails/OrderDetails';

const OrdersPage = (): JSX.Element => {
  const order = {
    location: 'Sri Jayewardenepura Kotte',
    placed_at: moment().format('LT'),
    status: orderStatus.acknowledged,
    riderStatus: riderStatus.atStore,
    total: '$22.15',
    ready: true,
    customer: {
      fullName: 'Priyanka Gupta',
      phoneNumber: '07754411336',
    },
    products: [
      {
        item: 'Lucknowi Chicken Biriyani & Masala Chaas',
        quantity: 1,
        price: '$50.00',
      },
    ],
    orderType: orderType.delivery,
  };

  const orders = [
    { id: '77d9228c', ...order },
    { id: '1e09e531', ...order },
    { id: 'b88166d2', ...order },
    { id: 'ee4fd5fc', ...order },
  ];

  const navItems = [
    { count: 0, label: 'New' },
    { count: 4, label: 'In Progress' },
    { count: 1, label: 'Awaiting Pickup' },
    { count: 4, label: 'Dispatched' },
    { count: 150, label: 'Completed' },
    { count: 25, label: 'Cancelled' },
  ];

  const [selectedItem, setSelectedItem] = useState(orders[0]);
  const [selectedNavItem, setSelectedNavItem] = useState(navItems[0]);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.list_of_orders}>
        <div className={styles.nav_header}>
          <div className={styles.nav_items}>
            {navItems.map((status) => (
              <div
                key={v4()}
                className={cx(
                  styles.nav_item,
                  selectedNavItem.label === status.label &&
                    styles.nav_item_selected
                )}
                onClick={() => setSelectedNavItem(status)}
              >
                {status.count > 0 && <OrderCount count={status.count} />}
                {status.label}
              </div>
            ))}
          </div>
          <div className={styles.nav_divider} />
          <div className={styles.filter_menu}>
            <SearchIcon />
            <FilterListIcon />
          </div>
        </div>
        <div>
          <DataTable
            orders={orders}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
      <div className={styles.view_order}>
        <OrderDetails order={selectedItem} />
      </div>
    </div>
  );
};

export default OrdersPage;
