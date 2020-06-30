import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

import { Card, CardItem, Right } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default  class SignUpCardItem extends Component {

 render() {

    return(

             <CardItem>
                <View>

                 <FontAwesome name={this.props.logo}  color="#05375a"  size ={30}  />
                </View>


                <Right style={{ flex: 1, alignItems: 'flex-start', height: 50, paddingHorizontal: 20,  }}>
                                    <Text style={{ color: 'grey', fontSize: 15 }}>{this.props.title}</Text>
                                         <TextInput style={{  marginTop: '2%', paddingLeft: 2.5, fontSize:20,color: '#05375a',}}  placeholder = {this.props.example}

                                                  />





              </Right>
             </CardItem>


    )




 }



}