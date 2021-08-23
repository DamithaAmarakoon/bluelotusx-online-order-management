import React, { FC } from 'react';

// icons
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PrintIcon from '@material-ui/icons/Print';
import BeenhereOutlinedIcon from '@material-ui/icons/BeenhereOutlined';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ClearIcon from '@material-ui/icons/Clear';

// styles
import './OrderDetails.styles.scss';

// components
import ProductsTable from './components/productsTable/ProductsTable';

interface IProps {
  order: any;
}

const OrderDetails: FC<IProps> = ({ order }) => {
  return (
    <div className='order-details-container'>
      {/* row 1 */}
      <div className='row1'>
        <div className='product-id'>
          <BookmarkIcon fontSize='small' /> {order.id}
        </div>
        <div className='order-type'>
          <div className='head'>Order Type</div>
          <div className='content'>{order.orderType}</div>
        </div>
        <div className='placed-at'>
          <div className='head'>Placed On</div>
          <div className='content'>{order.placed_at}</div>
        </div>
      </div>

      {/* row 2 */}
      <div className='row2'>
        <div className='location'>
          <div className='head'>Location</div>
          <div className='content'>{order.location}</div>
        </div>
        <div className='order-status'>
          <div className='head'>Status</div>
          <div className='content'>{order.status}</div>
        </div>
      </div>

      <div className='row3'>
        <div className='customer-details'>
          <div className='head'>Customer</div>
          <div className='content'>{order.customer.fullName}</div>
          <div className='content'>{order.customer.phoneNumber}</div>
        </div>
        <div className='delivery-details'>
          <div className='head'>Delivery</div>
          <div className='content'>{order.riderStatus}</div>
        </div>
      </div>

      <div className='row4'>
        <ProductsTable products={order.products} />
      </div>

      <div className='row5'>
        <div className='col1'>
          <div className='price-item'>
            <span>Sub Total</span>
            <span>$217.00</span>
          </div>
          <div className='price-item'>
            <span>Discount</span>
            <span>$10.00</span>
          </div>
          <div className='price-item'>
            <span>Taxes</span>
            <span>$5.00</span>
          </div>
          <div className='price-item'>
            <span>Charges</span>
            <span>$5.00</span>
          </div>
        </div>
        <div className='col2'>
          <div className='price-item fw-bold'>
            <span>Total</span>
            <span>$217.00</span>
          </div>
          <div className='divider' />
          <div className='price-item'>
            <span>Payment Gateway</span>
            <span>$217.00</span>
          </div>
        </div>
      </div>

      <div className='row6'>
        <div className='options-col'>
          <div className='details'>
            <ListAltIcon fontSize='large' />
            <div>Details</div>
          </div>
          <div className='print'>
            <PrintIcon fontSize='large' />
            <div>Print</div>
          </div>
          <div className='kot'>
            <EventAvailableIcon fontSize='large' />
            <div>KOT</div>
          </div>
          <div className='covid'>
            <BeenhereOutlinedIcon fontSize='large' />
            <div>Covid</div>
          </div>
          <button type='button' className='cancel'>
            <ClearIcon fontSize='large' />
            <div>Cancel</div>
          </button>
        </div>
        <div className='food-next-status'>
          <button type='button'>Food Ready</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
