import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from "react-native";

import { Container,Card, CardItem, Right ,Tab, Tabs,Left} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LocationScreen from 'ZoxApp1/screens/location'
import ManLocationScreen from 'ZoxApp1/screens/manualLocation'

export default  class LocationSettings extends Component {

 render() {

    return(

             <CardItem>
                <View style={{flexDirection: 'row'}}>

                 <FontAwesome name={this.props.logo}  color="#05375a"  size ={20}  />



                <Right style={{ flex: 1, alignItems: 'flex-start', height: 50, paddingHorizontal: 20,  }}>
                                    <Text style={{ color: 'grey', fontSize: 15 }}>{this.props.title}</Text>





              </Right>

              </View>











             </CardItem>


    )




 }



}