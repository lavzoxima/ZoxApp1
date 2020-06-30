/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import {createStore} from 'redux';
import reducers from 'ZoxApp1/reducers';
import Style from 'ZoxApp1/screens/splashScreenStyle.js'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import LogInScreen from 'ZoxApp1/screens/logIn'
import SignUpScreen from 'ZoxApp1/screens/signUp'




export default class   SplashScreen extends Component {

        render(){
return (

<>

   <View style={Style.container}>
  < Image

            source={require('ZoxApp1/assests/img4.png')}
            style={{ width:'50%', height:'50%', }}
            resizeMode="stretch"
            />
    </View>
    <View style={{flex:3/5 }} >
     <Container>

            <Tabs tabBarUnderlineStyle ={{backgroundColor :'#ff0000',}}  >
              <Tab heading="LOG IN"
                    textStyle={Style.tabStyle }
                    activeTextStyle={Style.tabStyle}
              >
                < LogInScreen/>
              </Tab>
              <Tab heading="SIGN UP"
                textStyle={Style.tabStyle}
                activeTextStyle={Style.tabStyle}
              >
                < SignUpScreen/>
              </Tab>

            </Tabs>
          </Container>


    </View>
    </>
);
}

}

