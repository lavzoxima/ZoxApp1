import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem ,Body, Title,Tab, Tabs} from 'native-base'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import allReducers from 'ZoxApp1/store';
import SplashScreen from  'ZoxApp1/screens/splashScreen'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import OtpScreen from 'ZoxApp1/screens/otpScreen'
import SignUpDetail from 'ZoxApp1/screens/signUpDetail'
import RouterComponent from 'ZoxApp1/Router'
import rootSaga from 'ZoxApp1/sagas';


const sagaMiddleware = createSagaMiddleware()

let store=createStore(allReducers, applyMiddleware(sagaMiddleware))

class App extends Component {
 render()
    {

return (
   <Provider store={store} >

   <RouterComponent/>
   </Provider>


);
sagaMiddleware.run(rootSaga)
}

}


export default App;