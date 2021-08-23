import React, { FC } from 'react';
import { Table } from 'reactstrap';
import { v4 } from 'uuid';

// styles
import './ProductsTable.module.scss';

interface IProps {
  products: any;
}

const ProductsTable: FC<IProps> = ({ products }) => {
  return (
    <Table size='sm' responsive>
      <thead>
        <tr id='table-head'>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product: any) => (
          <tr id='row' key={v4()}>
            <td>{product.item}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductsTable;
