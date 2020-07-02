import { combineReducers } from 'redux'
import { reducer as UserReducer } from 'ZoxApp1/store/user/Reducers'
import { reducer as ProductReducer } from 'ZoxApp1/store/user/Reducers'
const rootReducer = combineReducers({

   user: UserReducer,
   product: ProductReducer,
    //you can add more reducers here, separated by , !

});
export default rootReducer;