import React, { useState } from 'react';
import moment from 'moment';
import { v4 } from 'uuid';
import cx from 'classnames';
import { useMediaQuery } from 'react-responsive';

// styles
import styles from './OrdersPage.module.scss';

// config
import orderStatus from '../../config/orderStatus';
import riderStatus from '../../config/riderStatus';
import orderType from '../../config/orderType';

// components
import OrderCount from '../orderCount/OrderCount';
import DataTable from '../dataTable/DataTable';
import SearchBox from './components/searchBox/SearchBox';

// icons
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import OrderDetails from '../orderDetails/OrderDetails';
import GLOBAL_MEDIA_QUERIES from '../../config/globalMediaQueries';
import BasicModal from '../basicModal/BasicModal';
import FilterBox from './components/filterBox/FilterBox';

const OrdersPage = (): JSX.Element => {
  const isTablet = useMediaQuery({ query: GLOBAL_MEDIA_QUERIES.tab });

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
    quantity: 3,
  };

  const orders = [
    { id: '77d9228c', ...order },
    { id: '1e09e531', ...order },
    { id: 'b88166d2', ...order },
    { id: 'ee4fd5fc', ...order },
  ];

  const navItems = [
    { count: 5, label: 'Incoming' },
    { count: 2, label: 'Confirm' },
    { count: 6, label: 'Ready' },
    { count: 6, label: 'Dispatch' },
    { count: 6, label: 'Complete' },
    { count: 6, label: 'Cancel' },
  ];

  const [selectedItem, setSelectedItem] = useState(orders[0]);
  const [selectedNavItem, setSelectedNavItem] = useState(navItems[0]);

  // oder details modal
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  // search modal
  const [searchValue, setSearchValue] = useState('');
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const toggleSearchModal = () => setIsOpenSearch(!isOpenSearch);

  // filter modal
  const [filterValue, setFilterValue] = useState('');
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const toggleFilterModal = () => setIsOpenFilter(!isOpenFilter);

  const selectItem = (order: any) => {
    setSelectedItem(order);

    if (isTablet) {
      toggleModal();
    }
  };

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
          <div className={styles.filter_menu}>
            <SearchIcon
              onClick={toggleSearchModal}
              className={styles.search_icon}
            />
            <FilterListIcon
              onClick={toggleFilterModal}
              className={styles.filter_icon}
            />
          </div>
        </div>
        <div className={styles.data_table}>
          <DataTable
            orders={orders}
            selectedItem={selectedItem}
            selectItem={selectItem}
          />
        </div>
      </div>
      {!isTablet && (
        <div className={styles.view_order}>
          <OrderDetails order={selectedItem} />
        </div>
      )}

      {/* order details modal */}
      <BasicModal isOpen={isOpen} toggle={toggleModal} size='lg'>
        <OrderDetails order={selectedItem} />
      </BasicModal>

      {/* search modal */}
      <BasicModal
        isOpen={isOpenSearch}
        toggle={toggleSearchModal}
        size='md'
        closeIcon={false}
      >
        <SearchBox
          toggle={toggleSearchModal}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </BasicModal>

      {/* filter modal */}
      <BasicModal
        isOpen={isOpenFilter}
        toggle={toggleFilterModal}
        size='md'
        closeIcon={false}
      >
        <FilterBox
          toggle={toggleFilterModal}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </BasicModal>
    </div>
  );
};

export default OrdersPage;
