import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginSignupContainer from './LoginSignupContainer';
import OtpScreen from './Otp';
import SignUpDetail from './SignupDetail';
import CasualWearScreen from './CasualWear';
import CardImageExample from './ProductDetail';
import ListExample from './Cart';
import FooterScreen from './Footer';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: LoginSignupContainer,
    OtpScreen,
    CasualWearScreen,
    CardImageExample,
    SignUpDetail,
    ListExample,
    FooterScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(StackNavigator);
