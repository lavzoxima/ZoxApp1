import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Keyboard,TextInput, KeyboardAvoidingView} from 'react-native';
import {CardItem, Right, Spinner} from 'native-base';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {UserActions} from '../../redux/actions';
import styles from './Login.styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class LogInScreen extends Component {
  submit = () => {
  Keyboard.dismiss();
    this.props.loginUser({
      password: this.props.password,
      number: this.props.number,
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <CardItem style={styles.CaItem}>
          <FontAwesome name="user-o" color="#a9a9a9" size={wp('7%')} />
          <Right style={styles.rStyle}>
            <Text style={styles.title}>USERNAME / EMAIL</Text>
            <TextInput
              style={styles.tistyle}
              placeholder="Ex-test@gmail.com"
              onChangeText={value =>
                this.props.changeLoginForm({
                  number: value,
                  password: this.props.password,
                })
              }
              value={this.props.number}

            />
          </Right>
        </CardItem>

        <CardItem style={styles.CaItem1}>
          <FontAwesome name="lock" color="#a9a9a9" size={wp('7%')} />
          <Right style={styles.rStyle}>
            <Text style={[styles.title, {paddingLeft: 10}]}>PASSWORD</Text>
            <TextInput
              style={styles.tistyle}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholder="Enter your Password"
              value={this.props.password}
              onChangeText={value =>
                this.props.changeLoginForm({
                  password: value,
                  number: this.props.number,
                })
              }
            />
          </Right>
        </CardItem>

        <TouchableOpacity
          style={[
            styles.signIn,
            {borderColor: '#fff', borderWidth: 1, marginTop: hp('1.75%')},
          ]}
          disabled={this.props.userLoginIsLoading}
          onPress={() => this.submit()}>

            {this.props.userLoginIsLoading ? <Spinner color='#fff'/> :  <Text style={[
                                                                                             styles.textSign,
                                                                                             {color: '#fff', fontSize: wp('4%'), fontWeight: 'bold'},
                                                                                           ]}>
                                                                                           LOG IN
                                                                                         </Text> }
        </TouchableOpacity>

        <View style={{marginTop: hp('3%'), alignItems: 'center'}}>
          <Text>Don't have an account? Swipe right to create</Text>
          <Text style={{marginTop: '1%', color: '#dc143c'}}>a new account</Text>
          <Text
            style={{
              marginTop: hp('0.25%'),
              color: '#05375a',
              fontSize: wp('4%'),
              fontWeight: 'bold',
            }}>
            Powered By ZoxPrime
          </Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  number: state.user.number,
  password: state.user.password,
  userLoginIsLoading: state.user.userLoginIsLoading,
  userLoginErrorMessage: state.user.userLoginErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(UserActions.loginUser(data)),
  changeLoginForm: data => dispatch(UserActions.changeLoginForm(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInScreen);
