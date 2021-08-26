import { EMPTY_STATE, LOGIN, LOGOUT } from '../../actions/types';

const auth = (state = {}, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.data,
      };
    case LOGOUT:
      return {
        user: {},
      };
    case EMPTY_STATE:
      return {};
    default:
      return state;
  }
};

export default auth;
