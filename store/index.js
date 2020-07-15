import { combineReducers } from 'redux'
import { reducer as UserReducer } from 'ZoxApp1/store/user/Reducers'
import { reducer as ProductReducer } from 'ZoxApp1/store/product/Reducers'
import {  reducer as VisitsReducer  } from 'ZoxApp1/store/cart/Reducers'
import {  reducer as SignUpReducer  } from 'ZoxApp1/store/SignUp/Reducers'
const rootReducer = combineReducers({

   user: UserReducer,
   product: ProductReducer,
 visits:VisitsReducer,
 signUp :  SignUpReducer,
    //you can add more reducers here, separated by , !

});
export default rootReducer;