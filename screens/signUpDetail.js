import React, {Component} from 'react';
import { View, Text, Button, StyleSheet,TextInput , TouchableOpacity, Image,ScrollView } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem ,Body, Title,Tab, Tabs} from 'native-base'
import Style from 'ZoxApp1/screens/splashScreenStyle.js'
import {connect} from 'react-redux'
import UserActions from 'ZoxApp1/store/user/Actions'
import UserRegisterActions from 'ZoxApp1/store/SignUp/Actions'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker'
import SignUpCardItem from  'ZoxApp1/components/SignUpCardItem'
import LocationSettings from  'ZoxApp1/components/locationSettings'
import LocationScreen from 'ZoxApp1/screens/location'
import ManLocationScreen from 'ZoxApp1/screens/manualLocation'



class SignUpDetail extends Component {

componentDidMount() {




 this.props.SignUpUser(
 );


  }
    submit = () => {
                     this.props.RegisterUser({
                        token     : this.props.token,
                            agentid   : this.props.agentid,
                             LastName: this.props.LastName,
                             Password: this.props.Password,
                              Email:this.props.Email,
                              Phone: this.props.Phone,
                              City:this.props.City,
                              FirstName: this.props.FirstName,
                     });


                 }




 render(){


return (
      <ScrollView  style={{backgroundColor: '#f5f5f5',flex:1}}>







         <TouchableOpacity

             onPress={() => this.submit()}
           style={ [styles.signIn,
            {
             borderColor :'#d3d3d3',

             marginTop:'10%',
             fontSize:20,
             fontWeight: 'Bold'

            }]

             }>

  <Text style={{ color:'red', fontSize:20, fontWeight:'bold',}}> Next </Text>

           </TouchableOpacity>


         <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10%', borderRadius:10  }}>


         <SignUpCardItem

                            logo={"user-circle"}
                            title ={"First Name"}
                            placeholder= {"EX- LAV "}
                            value={this.props.FirstName}
                            onChange={(value) => this.props.changeLoginForm({FirstName: value, LastName: this.props.LastName,Password: this.props.Password, Email:this.props.Email, Phone: this.props.Phone, })}

                        />

        </Card>





        <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                                                <SignUpCardItem

                                                    logo={"user-o"}
                                                    title ={"Last Name"}
                                                    placeholder= {"Ex- Agarwal"}
                                                      value={this.props.LastName}
                                                                                onChange={(value) => this.props.changeLoginForm({LastName: value,FirstName: this.props.FirstName,Password: this.props.Password, Email:this.props.Email, Phone: this.props.Phone, })}



                                                />

                     </Card>


            <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%', borderRadius:10  }}>


                            <SignUpCardItem

                                               logo={"lock"}
                                               title ={"Password"}
                                               placeholder= {"Enter Password "}
                                               value={this.props.Password}
                                               onChange={(value) => this.props.changeLoginForm({Password: value,FirstName: this.props.FirstName, LastName:this.props.LastName, Email:this.props.Email, Phone: this.props.Phone,})}

                                           />

                           </Card>


          <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                <SignUpCardItem

                    logo={"envelope-open-o"}
                    title ={"EMAIL"}
                   placeholder= {"EX- Lav.ktm@gmail.com"}
                    value={this.props.Email}

                  onChange={(value) => this.props.changeLoginForm({Email: value, FirstName: this.props.FirstName, LastName:this.props.LastName,Password: this.props.Password,Phone: this.props.Phone, })}


                />

            </Card>
             <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                            <SignUpCardItem

                                logo={"mobile-phone"}
                                title ={"PHONE NUMBER"}
                                placeholder= {"Enter your Phone Number"}
                                value={this.props.Phone}

                          onChange={(value) => this.props.changeLoginForm({Phone: value,  FirstName: this.props.FirstName, LastName:this.props.LastName,Password: this.props.Password, Email:this.props.Email,})}

                            />

                        </Card>



                <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                    <LocationSettings
                          logo={"location-arrow"}
                          title ={"Location Settings"}

                   / >

                    <Text style={{ color: 'grey', fontSize: 15, marginLeft: '7%' }}>PIN CODE</Text>
                                                                    <TextInput style={{  marginTop: '2%',  marginLeft:'5%', marginRight: '5%',  marginBottom :'5%', fontSize:20,color: '#05375a', borderWidth :0.5}}
                            />
                                <Text style={{ color: 'grey', fontSize: 15, marginLeft: '7%', }}>Address(House No. , Building , Street , Area)</Text>
                                                                               <TextInput style={{  marginTop: '2%',  marginLeft:'5%', marginRight: '5%', fontSize:20,color: '#05375a', borderWidth :0.5}}
                                       />
                                <View>


                                </View>



                              <TouchableOpacity

                                                      style={
                                                         {borderColor : '#fff',
                                                         borderWidth : 1,
                                                         marginTop:'10%',
                                                           marginBottom:'10%',
                                                        width :'90%',
                                                          height: 45,

                                                                   justifyContent: 'center',
                                                                   alignItems: 'center',
                                                                   borderRadius: 30,
                                                                   marginRight:'5%',
                                                                   marginLeft:'5%',
                                                                   backgroundColor:'red'}

                                                         }



                                                      >

                                                      <Text style={[Style.textSign,{ color :'#fff', fontSize:20, fontWeight:'bold'}
                                                          ]}> ADD ADDRESS </Text>

                                                      </TouchableOpacity>



                          </Card>










      </ScrollView >
    );
};
};
const mapStateToProps = (state) => ({
    token                    : state.user.token,
    agentid                  : state.user.id,
     number: state.user.number,
      password: state.user.password,
     Email                 :      state.signUp.Email,
    Password:    state.signUp.Password,
        Phone :     state.signUp.Phone,

        FirstName:    state.signUp.FirstName,
        LastName :    state.signUp.LastName,


});

const mapDispatchToProps = (dispatch)  => ({
 loginUser: (data) => dispatch(UserActions.loginUser(data)),
   SignUpUser: (data) => dispatch(UserRegisterActions.SignUpUser(data)),
  RegisterUser: (data) => dispatch(UserRegisterActions.RegisterUser(data)),
   changeLoginForm : (data) => dispatch(UserRegisterActions.changeLoginForm(data)),


});







export default  connect(
               mapStateToProps ,
                mapDispatchToProps)
 ( SignUpDetail);


const styles = StyleSheet.create({
   container: {
     flex: 1,
     borderRadius: 10,

     backgroundColor: '#f5f5f5',
   },
    signIn: {

           height: 35,

           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: 30,
           marginRight:'5%',
           marginLeft:'75%',
           backgroundColor:'#f5f5f5'

       },
       textInput: {

                 fontSize:20,
               paddingLeft: 10,

           },
 });


