import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from  'ZoxApp1/screens/splashScreen'
import OtpScreen from 'ZoxApp1/screens/otpScreen'
import SignUpDetail from 'ZoxApp1/screens/signUpDetail'
import CasualWearScreen from 'ZoxApp1/screens/casualWear'
import  CardImageExample from  'ZoxApp1/screens/productdetail'
import   ListExample from 'ZoxApp1/screens/cart'
import  FooterScreen from 'ZoxApp1/screens/footer'


const StackNavigator = createStackNavigator(
  {
   SplashScreen,
   OtpScreen,
   CasualWearScreen,
   CardImageExample,

     SignUpDetail,
     ListExample,
     FooterScreen,


  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export const RootApp=  createAppContainer(StackNavigator);