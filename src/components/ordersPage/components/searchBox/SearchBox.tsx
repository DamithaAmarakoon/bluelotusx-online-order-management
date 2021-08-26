import * as React from 'react';
import { Formik, Form, Field } from 'formik';

// styles
import styles from './SearchBox.module.scss';

// icons
import SearchIcon from '@material-ui/icons/Search';

interface IProps {
  toggle: () => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FC<IProps> = ({
  toggle,
  searchValue,
  setSearchValue,
}) => {
  const initialValues = { searchValue };

  const onSubmit = (values: { searchValue: string }) => {
    setSearchValue(values.searchValue);
    toggle();
  };

  return (
    <div className={styles.search_wrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name='searchValue' type='text' placeholder='Search' />
          <button type='submit'>
            <SearchIcon />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;
