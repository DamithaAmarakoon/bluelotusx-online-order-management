import { LOGIN, LOGOUT } from '../types';
import { getUser } from '../../db/users';
import jwt from 'jsonwebtoken';

interface ILoginInfo {
  userName: string;
  password: string;
}

export const userLogin = (
  data: string | jwt.JwtPayload
): { type: string; data: string | jwt.JwtPayload } => ({
  type: LOGIN,
  data,
});

export const loginUser =
  (data: ILoginInfo) =>
  (dispatch: any): boolean => {
    const result = getUser(data);

    if (result.status && result.data) {
      localStorage.setItem('user_accessToken', result.data);
      dispatch(userLogin(jwt.verify(result.data, 'secret')));
      return true;
    }

    return false;
  };

export const logoutUser = () => (dispatch: any) => {
  if (localStorage.getItem('user_accessToken')) {
    localStorage.removeItem('user_accessToken');
  }
  dispatch({
    type: LOGOUT,
  });
};
