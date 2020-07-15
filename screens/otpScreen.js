import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableHighlight,TouchableOpacity, TextInput,Image } from 'react-native';
import Style from 'ZoxApp1/screens/otpStyle.js'
import SignUpScreen from 'ZoxApp1/screens/signUp'
import * as NavigationService from 'ZoxApp1/service/util/NavigationService'



export default class OtpScreen extends Component{
constructor(props){

super(props)
this.state= {
pin1:"",
pin2:"",
pin3:"",
pin4:"",
pin5:"",
pin6:"",


}


}

componentDidMount=()=>{

this.refs.pin1ref.focus()

}

render( props){

const{pin1,pin2,pin3,pin4,pin5,pin6}=this.state


return(

<>

<View style={[Style.container , {flex:1/5,}]}>
< Image

        source={require('ZoxApp1/assests/img4.png')}
        style={{ width:'30%', height:'60%', marginTop:'10%' }}
        resizeMode="stretch"
        />
</View>

<View style={Style.con1}>

<Text style={[Style.title, {marginTop:'5%'}]}> Please enter OTP  we have sent you on </Text>
<View style={{flexDirection:'row'}}>

<Text style={[ Style.title, {  marginTop:'1%' }]}>+91-{this.props.name} </Text>
<Text  style={Style.Edit}> Edit </Text>

</View>

<View style={Style.con2}>
  <TextInput
  ref={"pin1ref"}
  onChangeText={(pin1)=> {this.setState({pin1:pin1})
  if(pin1 !="")
  { this.refs.pin2ref.focus()
  }
    }
  }
  value={pin1}
  maxLength={1}
  style={Style.tistyle } />


   <TextInput
  ref={"pin2ref"}
   onChangeText={(pin2)=> {this.setState({pin2:pin2})
    if(pin2 !="")
    { this.refs.pin3ref.focus()}
    if(pin2 =="")
                 { this.refs.pin1ref.focus()
                 }

  } }
  value={pin2}
  maxLength={1}
  style={[ Style.tistyle ,{  marginLeft:'5%',}]} />

   <TextInput
        ref={"pin3ref"}
         onChangeText={(pin3)=> {this.setState({pin3:pin3})
          if(pin3 !="")
                      { this.refs.pin4ref.focus()
                      }
          if(pin3 =="")
                                    { this.refs.pin2ref.focus()
                                    }

         }}
              value={pin3}

        maxLength={1}
        style={[ Style.tistyle ,{  marginLeft:'5%',}]} />
    <TextInput
         ref={"pin4ref"}
          onChangeText={(pin4)=> {this.setState({pin4:pin4})
            if(pin4 !="")
                                    { this.refs.pin5ref.focus()
                                    }
            if(pin4 =="")
                                                    { this.refs.pin3ref.focus()
                                                    }


          }
          }
               value={pin4}
         maxLength={1}
         style={[ Style.tistyle ,{  marginLeft:'5%',}]} />
    <TextInput
               ref={"pin5ref"}
                onChangeText={(pin5)=> {this.setState({pin5:pin5})
                if(pin5 !="")
                  { this.refs.pin6ref.focus()
                                                                          }
                 if(pin5 =="")
                                                                            { this.refs.pin4ref.focus()
                                                                            }

                }}
                     value={pin5}
               maxLength={1}
               style={{   fontSize:25,color: '#05375a',fontWeight:"600",  width: 40, padding:10 , borderBottomWidth: 3, borderBottomColor: "#708090",marginLeft:'5%',justifyContent:'center',alignSelf:"center"}} />

     <TextInput
          ref={"pin6ref"}
           onChangeText={(pin6)=> {this.setState({pin6:pin6})

            if(pin6 =="")
                                                                       { this.refs.pin5ref.focus()
                                                                       }


           }}
                value={pin6}
          maxLength={1}
          style={[ Style.tistyle ,{  marginLeft:'5%',}]  } />

</View>

<TouchableOpacity
                     onPress = {() => NavigationService.navigate('SignUpDetail') }
                      style={ [Style.signIn,
                         {borderColor : '#fff',
                         borderWidth : 1,
                         marginTop:'20%'}]

                         }



                      >

                      <Text style={[Style.textSign,{ color :'#fff', fontSize:20, fontWeight:'bold'}
                          ]}> VERIFY </Text>

                      </TouchableOpacity>


</View>

</>









)











}





}


