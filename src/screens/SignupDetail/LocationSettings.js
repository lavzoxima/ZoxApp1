import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {CardItem, Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LocationScreen from '../Location';
import ManLocationScreen from '../ManualLocation';

export default class LocationSettings extends Component {
  render() {
    return (
      <CardItem>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name={this.props.logo} color="#05375a" size={20} />

          <Right
            style={{
              flex: 1,
              alignItems: 'flex-start',
              height: 50,
              paddingHorizontal: 20,
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              {this.props.title}
            </Text>
          </Right>
        </View>
      </CardItem>
    );
  }
}
