import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Style from 'ZoxApp1/screens/logInStyle'


import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem ,Body, Title,Tab, Tabs} from 'native-base'
const ManLocationScreen = () => {
    return (
      <View style={styles.container}>
         <Text style={{ color: 'grey', fontSize: 15, marginLeft: '7%' }}>PIN CODE</Text>
                                                 <TextInput style={{  marginTop: '2%',  marginLeft:'5%', marginRight: '5%',  marginBottom :'5%', fontSize:20,color: '#05375a', borderWidth :0.5}}
         />
             <Text style={{ color: 'grey', fontSize: 15, marginLeft: '7%', }}>Address(House No. , Building , Street , Area)</Text>
                                                            <TextInput style={{  marginTop: '2%',  marginLeft:'5%', marginRight: '5%', fontSize:20,color: '#05375a', borderWidth :0.5}}
                    />



           <TouchableOpacity

                                   style={ [Style.signIn,
                                      {borderColor : '#fff',
                                      borderWidth : 1,
                                      marginTop:'10%'}]

                                      }



                                   >

                                   <Text style={[Style.textSign,{ color :'#fff', fontSize:20, fontWeight:'bold'}
                                       ]}> ADD ADDRESS </Text>

                                   </TouchableOpacity>


      </View>
    );
};

export default  ManLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : '10%'

  },
});