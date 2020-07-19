import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Location.styles';

const LocationScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          borderColor: '#d3d3d3',
          height: 35,
          width: '60%',
          marginRight: '5%',
          marginLeft: '5%',
          fontSize: 20,
          fontWeight: 'Bold',
        }}>
        <Text style={{color: 'red', fontSize: 25}}> Current Location </Text>
        <Text style={{color: 'red', fontSize: 15}}> Using GPS </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;
