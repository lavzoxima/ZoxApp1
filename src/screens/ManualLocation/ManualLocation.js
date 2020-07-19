import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './ManualLocation.styles';

const ManLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'grey', fontSize: 15, marginLeft: '7%'}}>
        PIN CODE
      </Text>
      <TextInput
        style={{
          marginTop: '2%',
          marginLeft: '5%',
          marginRight: '5%',
          marginBottom: '5%',
          fontSize: 20,
          color: '#05375a',
          borderWidth: 0.5,
        }}
      />
      <Text style={{color: 'grey', fontSize: 15, marginLeft: '7%'}}>
        Address(House No. , Building , Street , Area)
      </Text>
      <TextInput
        style={{
          marginTop: '2%',
          marginLeft: '5%',
          marginRight: '5%',
          fontSize: 20,
          color: '#05375a',
          borderWidth: 0.5,
        }}
      />

      <TouchableOpacity
        style={{borderColor: '#fff', borderWidth: 1, marginTop: '10%'}}>
        <Text
          style={[
            styles.textSign,
            {color: '#fff', fontSize: 20, fontWeight: 'bold'},
          ]}>
          ADD ADDRESS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManLocationScreen;
