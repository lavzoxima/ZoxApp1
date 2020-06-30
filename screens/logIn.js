import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, Keyboard, ScrollView, TouchableHighlight,TouchableOpacity, TextInput } from 'react-native';
import { Card, CardItem, Right } from 'native-base'
import {connect} from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import UserActions from 'ZoxApp1/store/user/Actions'
import Feather from 'react-native-vector-icons/Feather';
import Style from 'ZoxApp1/screens/logInStyle'

class   LogInScreen extends Component {

             submit = () => {


                    this.props.loginUser({

                    password: this.props.password,
                      number: this.props.number
                    });

                     console.log('im in submit');

                }





     render(){

    return (
      <View style={Style.container}>

         <CardItem style={Style. CaItem}>

           <FontAwesome name="user-o"  color="#05375a"  size ={35}  />
          <Right style={Style.rStyle}>

          <Text style={ Style.title }>USERNAME / EMAIL</Text>

          <TextInput style={Style.tistyle}  placeholder = "Ex-test@gmail.com"
            onChangeText={(value) => this.props.changeLoginForm({number: value, password: this.props.password})}
             value =  {this.props.number}
             autoFocus={true}
           />
           </Right>


          </CardItem>

           <CardItem style={Style.CaItem1}>

                     <FontAwesome name="lock"  color="#05375a"  size ={35}  />
                    <Right style={Style.rStyle}>

                    <Text style={[Style.title, {paddingLeft: 10,}]}>PASSWORD</Text>

                    <TextInput style={Style.tistyle} autoCapitalize= "none" secureTextEntry = {true} placeholder = "Enter your Password"
                    value={this.props.password}
                    onChangeText={(value) => this.props.changeLoginForm({password: value, number: this.props.number})}
                    />
                     </Right>


                    </CardItem>


           <TouchableOpacity

                          style={ [Style.signIn,
                             {borderColor : '#fff',
                             borderWidth : 1,
                             marginTop:15}]

                             }

                            onPress={this.submit}

                          >

                          <Text style={[Style.textSign,{ color :'#fff', fontSize:20, fontWeight:'bold'}
                              ]}> LOG IN </Text>

                          </TouchableOpacity>

                          <View style={{marginTop:'12%', alignItems:'center'}}>
                          <Text>  Dont have an account?  Swipe right to create  </Text>
                          <Text style={{marginTop:'1%', color:'#dc143c'}}> a new account </Text>
                           <Text style={{marginTop:'3%', color:'#05375a', fontSize:15, fontWeight:'bold'}}> Powered By ZoxPrime </Text>


                           </View>
      </View>



    );
};

};

const mapStateToProps = (state) => ({

  number: state.user.number,
  password: state.user.password,
  userLoginIsLoading: state.user.userLoginIsLoading,
  userLoginErrorMessage: state.user.userLoginErrorMessage,

})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(UserActions.loginUser(data)),
  changeLoginForm: (data) => dispatch(UserActions.changeLoginForm(data))
});


export default connect(
mapStateToProps ,
mapDispatchToProps)
(LogInScreen)

