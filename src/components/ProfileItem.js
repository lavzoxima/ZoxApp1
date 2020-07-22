import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet, View
} from 'react-native';
import {Switch, Badge, List, ListItem, Footer, FooterTab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import styles from '../screens/profile/profile.styles.js';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

 class  ProfileItem extends Component {

 componentDidMount() {
     const {icon1, Name, icon2,leftStyle, rightStyle, NameStyle} = this.props;
   }
render() {
  const {icon1, Name, icon2, leftStyle, rightStyle, NameStyle} = this.props;

return (

            <ListItem icon>
         <Left>
        <Icon style={leftStyle} active name={icon1} />

          </Left>
                        <Right>
                    <Text style={[styles.text1, NameStyle]}>{Name} </Text></Right>
                       <Button style={[styles.arrow1 ,rightStyle]}>
                     <Icon  active name={icon2} />
                     </Button>
 </ListItem>


);
}
}

export default
(ProfileItem);

