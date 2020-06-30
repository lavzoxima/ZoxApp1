import { combineReducers } from 'redux'
import { reducer as UserReducer } from 'ZoxApp1/store/user/Reducers'
const allReducers = combineReducers({

   user: UserReducer,
    //you can add more reducers here, separated by , !
});
export default allReducers;