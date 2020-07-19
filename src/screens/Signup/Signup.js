import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {CardItem, Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Signup.styles';
import * as NavigationService from '../../utils/navigation';

class SignUpScreen extends Component {
  onButtonPress() {
    NavigationService.navigate('OtpScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <CardItem style={styles.CaItem}>
          <FontAwesome name="mobile-phone" color="#05375a" size={35} />
          <Right style={styles.rStyle}>
            <Text style={[styles.title, {alignItems: 'center'}]}>
              MOBILE NUMBER
            </Text>
          </Right>
        </CardItem>

        <CardItem style={styles.CaItem1}>
          <Right style={styles.rStyle1}>
            <TextInput
              style={styles.tistyle}
              autoCapitalize="none"
              placeholder="Enter Your Mobile Number"
            />
          </Right>
        </CardItem>

        <TouchableOpacity
          onPress={() => this.onButtonPress()}
          style={[
            styles.signIn,
            {borderColor: '#fff', borderWidth: 1, marginTop: 15},
          ]}>
          <Text
            style={[
              styles.textSign,
              {color: '#fff', fontSize: 20, fontWeight: 'bold'},
            ]}>
            SEND OTP
          </Text>
        </TouchableOpacity>
        <View style={{marginTop: '12%', alignItems: 'center'}}>
          <Text> By creating an account, you agree to our </Text>
          <Text style={{marginTop: '1%', color: '#dc143c'}}>
            Terms of Service and Privacy Policy
          </Text>
          <Text
            style={{
              marginTop: '3%',
              color: '#05375a',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Powered By ZoxPrime
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUpScreen;
