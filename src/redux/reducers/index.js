/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import {combineReducers} from 'redux';
import UserReducer from './user';
import ProductReducer from './product';
import VisitsReducer from './cart';
import SignUpReducer from './signup';

const rootReducer = combineReducers({
  user: UserReducer,
  product: ProductReducer,
  visits: VisitsReducer,
  signUp: SignUpReducer,
});

export default rootReducer;
