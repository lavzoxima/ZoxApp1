import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Right, CardItem} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignUpCardItem = ({
  placeholder = '',
  onChange = () => {},
  value = '',
  logo = '',
  title = '',
}) => (
  <CardItem>
    <View>
      <FontAwesome name={logo} color="#05375a" size={25} />
    </View>

    <Right
      style={{
        flex: 1,
        alignItems: 'flex-start',
        height: 50,
        paddingHorizontal: 20,
      }}>
      <Text style={{color: 'grey', fontSize: 15,  paddingLeft: 5,}}>{title}</Text>
      <TextInput
        style={{
          marginTop: '2%',
          paddingLeft: 5,
          fontSize: 17.5,
          color: '#05375a',
        }}
        placeholder={placeholder}
        onChangeText={event => onChange(event)}
      />
    </Right>
  </CardItem>
);

export default SignUpCardItem;
