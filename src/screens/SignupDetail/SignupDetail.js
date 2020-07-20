import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'native-base';
import {connect} from 'react-redux';
import {
  UserActions,
  SignupActions as UserRegisterActions,
} from '../../redux/actions';
import styles from './SignupDetail.styles';
import SignUpCardItem from './SignupCardItem';
import LocationSettings from './LocationSettings';
import LocationScreen from '../Location';
import ManLocationScreen from '../ManualLocation';

class SignUpDetail extends Component {
  componentDidMount() {
    this.props.SignUpUser({
    password : 'Test@4321',
    number : 'jagpreet.singh@zoxima.com.dms2',

    });
  }
  submit = () => {
    this.props.RegisterUser({
      token: this.props.token,
      agentid: this.props.agentid,
      LastName: this.props.LastName,
      Password: this.props.Password,
      Email: this.props.Email,
      Phone: this.props.Phone,
      City: this.props.City,
      FirstName: this.props.FirstName,
    });
  };

  render() {
    return (
      <ScrollView style={{backgroundColor: '#f5f5f5', flex: 1}}>
        <TouchableOpacity
          onPress={() => this.submit()}
          style={[
            styles.signIn,
            {
              borderColor: '#d3d3d3',

              marginTop: '10%',
              fontSize: 20,
              fontWeight: 'Bold',
            },
          ]}>
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            Next
          </Text>
        </TouchableOpacity>

        <Card
          style={{
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '10%',
            borderRadius: 10,
          }}>
          <SignUpCardItem
            logo={'user-circle'}
            title={'First Name'}
            placeholder={'EX- LAV'}
            value={this.props.FirstName}
            onChange={value =>
              this.props.changeLoginForm({
                FirstName: value,
                LastName: this.props.LastName,
                Password: this.props.Password,
                Email: this.props.Email,
                Phone: this.props.Phone,
              })
            }
          />
        </Card>

        <Card style={{marginLeft: '5%', marginRight: '5%', marginTop: '7%'}}>
          <SignUpCardItem
            logo={'user-o'}
            title={'Last Name'}
            placeholder={'Ex- Agarwal'}
            value={this.props.LastName}
            onChange={value =>
              this.props.changeLoginForm({
                LastName: value,
                FirstName: this.props.FirstName,
                Password: this.props.Password,
                Email: this.props.Email,
                Phone: this.props.Phone,
              })
            }
          />
        </Card>

        <Card
          style={{
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '7%',
            borderRadius: 10,
          }}>
          <SignUpCardItem
            logo={'lock'}
            title={'Password'}
            placeholder={'Enter Password '}
            value={this.props.Password}
            onChange={value =>
              this.props.changeLoginForm({
                Password: value,
                FirstName: this.props.FirstName,
                LastName: this.props.LastName,
                Email: this.props.Email,
                Phone: this.props.Phone,
              })
            }
          />
        </Card>

        <Card style={{marginLeft: '5%', marginRight: '5%', marginTop: '7%'}}>
          <SignUpCardItem
            logo={'envelope-open-o'}
            title={'EMAIL'}
            placeholder={'EX- Lav.ktm@gmail.com'}
            value={this.props.Email}
            onChange={value =>
              this.props.changeLoginForm({
                Email: value,
                FirstName: this.props.FirstName,
                LastName: this.props.LastName,
                Password: this.props.Password,
                Phone: this.props.Phone,
              })
            }
          />
        </Card>
        <Card style={{marginLeft: '5%', marginRight: '5%', marginTop: '7%'}}>
          <SignUpCardItem
            logo={'mobile-phone'}
            title={'PHONE NUMBER'}
            placeholder={'Enter your Phone Number'}
            value={this.props.Phone}
            onChange={value =>
              this.props.changeLoginForm({
                Phone: value,
                FirstName: this.props.FirstName,
                LastName: this.props.LastName,
                Password: this.props.Password,
                Email: this.props.Email,
              })
            }
          />
        </Card>


      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  token: state.user.token,
  agentid: state.user.id,
  number: state.user.number,
  password: state.user.password,
  Email: state.signUp.Email,
  Password: state.signUp.Password,
  Phone: state.signUp.Phone,

  FirstName: state.signUp.FirstName,
  LastName: state.signUp.LastName,
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(UserActions.loginUser(data)),
  SignUpUser: data => dispatch(UserRegisterActions.SignUpUser(data)),
  RegisterUser: data => dispatch(UserRegisterActions.RegisterUser(data)),
  changeLoginForm: data => dispatch(UserRegisterActions.changeLoginForm(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpDetail);
