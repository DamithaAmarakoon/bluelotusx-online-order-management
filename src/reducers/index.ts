import { combineReducers } from 'redux';

// reducers
import auth from './auth/auth';

// types
import { EMPTY_STATE } from '../actions/types';

const rootReducer = combineReducers({
  auth,
});

export default (state: any, action: any) =>
  rootReducer(action.type === EMPTY_STATE ? undefined : state, action);
