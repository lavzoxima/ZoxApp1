import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from  'ZoxApp1/screens/splashScreen'
import OtpScreen from 'ZoxApp1/screens/otpScreen'
import SignUpDetail from 'ZoxApp1/screens/signUpDetail'
import CasualWearScreen from 'ZoxApp1/screens/casualWear'
import  CardImageExample from  'ZoxApp1/screens/productdetail'


const StackNavigator = createStackNavigator(
  {
   SplashScreen,
   CasualWearScreen,
   CardImageExample,
    OtpScreen,
     SignUpDetail,


  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export const RootApp=  createAppContainer(StackNavigator);