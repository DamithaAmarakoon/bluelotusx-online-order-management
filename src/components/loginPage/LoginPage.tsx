import React, { useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { loginUser } from '../../actions/auth/auth';
import { useDispatch } from 'react-redux';

// images
import logo from '../../assets/images/logo.jpeg';
import banner from '../../assets/images/banner.jpeg';

// styles
import styles from './LoginPage.module.scss';

interface IFormData {
  userName: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [invalidLogin, setInvalidLogin] = useState(false);

  const initialValues = {
    userName: '',
    password: '',
  };

  const submitForm = (
    values: IFormData,
    actions: FormikHelpers<IFormData>
  ): void => {
    if (dispatch(loginUser(values))) {
      setInvalidLogin(false);
      actions.resetForm();
      history.push('/dashboard');
    } else {
      setInvalidLogin(true);
    }
  };

  const loginSchema = Yup.object().shape({
    userName: Yup.string().required(),
    password: Yup.string().required().min(8),
  });

  return (
    <div className={styles.main_wrapper}>
      <img src={logo} alt='Blue Lotus Logo' className={styles.company_logo} />

      <div className={styles.login_form_wrapper}>
        {invalidLogin && (
          <Alert id={styles.invalid_login_alert} color='danger'>
            You have entered an invalid username or password
          </Alert>
        )}
        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          validationSchema={loginSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styles.input_group}>
                <Field
                  name='userName'
                  type='text'
                  placeholder='User name'
                  className={cx(
                    styles.input_field,
                    errors.userName && touched.userName && styles.input_error
                  )}
                />
              </div>
              <div className={styles.input_group}>
                <Field
                  name='password'
                  type='password'
                  placeholder='Password'
                  className={cx(
                    styles.input_field,
                    errors.password && touched.password && styles.input_error
                  )}
                />
              </div>
              <button type='submit' className={styles.form_submit_btn}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <img
        src={banner}
        alt='Blue Lotus Banner'
        className={styles.company_banner}
      />
    </div>
  );
};

export default LoginPage;
