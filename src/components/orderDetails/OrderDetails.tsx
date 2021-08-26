import React, { FC } from 'react';
import cx from 'classnames';

// icons
import PrintIcon from '@material-ui/icons/Print';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

// styles
import styles from './OrderDetails.module.scss';

// components
import ProductsTable from './components/productsTable/ProductsTable';
import ConfirmButton from '../confirmButton/ConfirmButton';

interface IProps {
  order: any;
}

const OrderDetails: FC<IProps> = ({ order }) => {
  return (
    <div className={styles.order_details_container}>
      {/* row 1 */}
      <div className={styles.row1}>
        <div className={styles.product_id}>
          <div className={styles.title}>Order Id</div>
          <div className={styles.content}>{order.id}</div>
        </div>
        <div className={styles.order_type}>
          <div className={styles.title}>Order Type</div>
          <div className={styles.content}>{order.orderType}</div>
        </div>
        <div className={styles.placed_at}>
          <div className={styles.title}>Placed At</div>
          <div className={styles.content}>{order.placed_at}</div>
        </div>
      </div>

      <div className={styles.row3}>
        <div className={styles.customer_details}>
          <div className={styles.title}>Customer</div>
          <div className={styles.content}>
            <div>{order.customer.fullName}</div>
            <div>{order.customer.phoneNumber}</div>
            <div>{order.location}</div>
          </div>
        </div>
        <div className={styles.order_comments}>
          <div className={styles.title}>Order Comment</div>
          <div className={styles.content}>comment here</div>
        </div>
        <div className={styles.status_and_payment_container}>
          <div className={styles.order_status}>
            <div className={styles.title}>Current Order Status</div>
            <div className={styles.content}>Incoming</div>
          </div>
          <div className={styles.payment_type}>
            <div className={styles.title}>Payment Type</div>
            <div className={styles.content}>Uber Wallet</div>
          </div>
        </div>
      </div>

      <div className={styles.row4}>
        <ProductsTable products={order.products} />
      </div>

      <div className={styles.row5}>
        <div className={styles.col1}>
          <div className={styles.price_item}>
            <span>Sub Total</span>
            <span>$217.00</span>
          </div>
          <div className={styles.price_item}>
            <span>Discount</span>
            <span>$10.00</span>
          </div>
          <div className={styles.price_item}>
            <span>Taxes</span>
            <span>$5.00</span>
          </div>
          <div className={styles.price_item}>
            <span>Charges</span>
            <span>$5.00</span>
          </div>
        </div>
        <div className={styles.col2}>
          <div className={cx(styles.price_item, styles.border)}>
            <span>Total</span>
            <span>$217.00</span>
          </div>
          <div className={styles.price_item}>
            <span>Payment Gateway</span>
            <span>$217.00</span>
          </div>
        </div>
      </div>

      <div className={styles.row6}>
        <div className={styles.kot}>
          <EventAvailableIcon fontSize='medium' />
          <div>KOT</div>
        </div>
        <div className={styles.print}>
          <PrintIcon fontSize='medium' />
          <div>Print</div>
        </div>
        <div className={styles.food_next_status}>
          <ConfirmButton />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
