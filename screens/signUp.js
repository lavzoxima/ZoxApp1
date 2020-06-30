import React, {Component} from 'react';
import { View, Text, Button, StyleSheet,TextInput , TouchableOpacity} from 'react-native';
import { Card, CardItem, Right } from 'native-base'
import {connect} from 'react-redux'
import { nameChanged} from'ZoxApp1/actions';
import {Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Style from 'ZoxApp1/screens/signUpStyle'
 class SignUpScreen extends Component {

 onNameChange(text)
 {

     this.props.nameChanged(text);


 }

 onButtonPress()
        {

        Actions.OtpScreen();


        }




 render(){
return (
      <View style={Style.container}>

         <CardItem style={Style.CaItem}>

           <FontAwesome name="mobile-phone"  color="#05375a"  size ={35}  />
          <Right style={Style. rStyle}>

          <Text style={[Style.title,{  alignItems:'center' }]}> MOBILE NUMBER</Text>


            </Right>
          </CardItem>

           <CardItem style={Style.CaItem1 }>


                    <Right style={Style.rStyle1}>



                    <TextInput style={Style. tistyle} autoCapitalize= "none" placeholder = "Enter Your Mobile Number"
                       onChangeText={this.onNameChange.bind(this)}
                         value ={this.props.name}

                      />
                     </Right>


                    </CardItem>


           <TouchableOpacity
                onPress = {() => Actions.OtpScreen()}
                                          style={ [Style.signIn,
                             {borderColor : '#fff',
                             borderWidth : 1,
                             marginTop:15}]

                             }

                          >

                          <Text style={[Style.textSign,{ color :'#fff', fontSize:20, fontWeight:'bold'}
                              ]}> SEND OTP </Text>

                          </TouchableOpacity>
                          <View style={{marginTop:'12%', alignItems:'center'}}>
                                                    <Text>  By creating an account, you agree to our  </Text>
                                                    <Text style={{marginTop:'1%', color:'#dc143c'}}> Terms of Service and Privacy Policy </Text>
                                                     <Text style={{marginTop:'3%', color:'#05375a', fontSize:15, fontWeight:'bold'}}> Powered By ZoxPrime </Text>


                                                     </View>


      </View>
    );
};
};
const mapStateToProps = state =>
{
return {



name: state.auth.name,

};


};



export default connect(mapStateToProps ,{nameChanged}) (SignUpScreen);

