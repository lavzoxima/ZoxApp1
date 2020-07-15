import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem ,Body, Title,Tab, Tabs} from 'native-base'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

 const SignUpCardItem = ({ placeholder = '', onChange = ()=>{},  value='' ,logo='', title=''}) => (



             <CardItem>
                <View>

                 <FontAwesome name={logo}  color="#05375a"  size ={30}  />
                </View>


                <Right style={{ flex: 1, alignItems: 'flex-start', height: 50, paddingHorizontal: 20,  }}>
                                    <Text style={{ color: 'grey', fontSize: 15 }}>{title}</Text>
                                         <TextInput style={{  marginTop: '2%', paddingLeft: 2.5, fontSize:20,color: '#05375a',}}  placeholder = {placeholder}
                                            onChangeText={(event) => onChange(event)}


                                                  />





              </Right>
             </CardItem>



)

export default SignUpCardItem