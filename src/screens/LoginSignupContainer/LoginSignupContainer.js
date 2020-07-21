import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import styles from './LoginSignupContainer.styles';
import LogInScreen from '../Login';
import SignUpScreen from '../Signup';
import {img4} from '../../images';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class LoginSignupContainer extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            source={img4}
            style={{width: wp('40%'), height: hp('20%')}}
            resizeMode="stretch"
          />
        </View>
        <View style={{flex: 4 / 6}}>
          <Container>
            <Tabs tabBarUnderlineStyle={{backgroundColor: '#ff6347'}}>
              <Tab
                heading="Log In"

                textStyle={styles.tabStyle}
                activeTextStyle={styles.tabStyle}
                tabStyle={{ backgroundColor: '#f5f5f5'}}
                activeTabStyle={{backgroundColor: '#f5f5f5'}}
                >
                <LogInScreen />
              </Tab>
              <Tab
                heading="Sign Up"
                textStyle={styles.tabStyle}
                activeTextStyle={styles.tabStyle}
                  tabStyle={{ backgroundColor: '#f5f5f5'}}
                  activeTabStyle={{backgroundColor: '#f5f5f5'}}
                >

                <SignUpScreen />
              </Tab>
            </Tabs>
          </Container>
        </View>
      </>
    );
  }
}
