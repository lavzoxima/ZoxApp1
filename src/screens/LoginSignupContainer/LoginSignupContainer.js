import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container, Tab, Tabs} from 'native-base';
import styles from './LoginSignupContainer.styles';
import LogInScreen from '../Login';
import SignUpScreen from '../Signup';
import {img4} from '../../images';

export default class LoginSignupContainer extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            source={img4}
            style={{width: '50%', height: '50%'}}
            resizeMode="stretch"
          />
        </View>
        <View style={{flex: 3 / 5}}>
          <Container>
            <Tabs tabBarUnderlineStyle={{backgroundColor: '#ff0000'}}>
              <Tab
                heading="Log In"

                textStyle={styles.tabStyle}
                activeTextStyle={styles.tabStyle}>
                <LogInScreen />
              </Tab>
              <Tab
                heading="Sign Up"
                textStyle={styles.tabStyle}
                activeTextStyle={styles.tabStyle}>
                <SignUpScreen />
              </Tab>
            </Tabs>
          </Container>
        </View>
      </>
    );
  }
}
