import * as React from 'react';
import { Formik, Form, Field } from 'formik';

// styles
import styles from './FilterBox.module.scss';

// icons
import DoneAllIcon from '@material-ui/icons/DoneAll';

interface IProps {
  toggle: () => void;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBox: React.FC<IProps> = ({
  toggle,
  filterValue,
  setFilterValue,
}) => {
  const initialValues = { filterValue };

  const onSubmit = (values: { filterValue: string }) => {
    setFilterValue(values.filterValue);
    toggle();
  };

  return (
    <div className={styles.filter_wrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='filterValue' type='text' placeholder='Filter' />
          <button type='submit'>
            <DoneAllIcon />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBox;
