import { combineReducers } from 'redux'
import { reducer as UserReducer } from 'ZoxApp1/store/user/Reducers'
const rootReducer = combineReducers({
   user: UserReducer
});
export default rootReducer;