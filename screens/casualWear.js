/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
  Button,
  StatusBar,
  Image,
} from 'react-native';

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem ,Body, Title} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import RecommendedCardItem from 'ZoxApp1/components/RecommendedCardItem'


export default function  casualWear() {

return (
      <Container>
      <Header style={{ backgroundColor: '#fff', height: '42%', borderBottomColor: '#757575' }}>

<Left style={{ flexDirection: 'row' }}>

                        <FAIcon name="chevron-left" style={{ fontSize: 30, color: 'red' }} />
                         <Body>
                          <Title style={{ fontSize:35, color: '#a9a9a9' , marginRight: '30%', marginBottom: 10}}>Casual Wear</Title>
                                                      </Body>
                    </Left>


      </Header>

   <View style={{ position: 'absolute', left: 0, right: 0, top: '12%', height: '10%', backgroundColor: '#dcdcdc', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5,  }}>
        <TouchableOpacity>
                                <View style={{ width: 75, backgroundColor: '#fff', height: 45, borderRadius: 20, padding: 15,alignItems: 'center', marginLeft:'10%' }}>

                                    <Text style={{ fontSize: 12,   }}>Shirts</Text>


                                </View>


                            </TouchableOpacity>
        <TouchableOpacity>
        <View style={{ width: 75, backgroundColor: '#fff', height: 45, borderRadius: 20, padding: 15,alignItems: 'center',marginRight:'5%' }}>

          <Text style={{ fontSize: 12,   }}> T-Shirt</Text>

 </View>
 </TouchableOpacity>
  <TouchableOpacity>
         <View style={{ width: 75, backgroundColor: '#fff', height: 45, borderRadius: 20, padding: 15,alignItems: 'center', marginRight:'5%' }}>

           <Text style={{ fontSize: 12,  }}>Denims</Text>

  </View>
  </TouchableOpacity>
   <TouchableOpacity>
          <View style={{ width: 80, backgroundColor: '#fff', height: 45, borderRadius: 20, padding: 15,alignItems: 'center', marginRight:'5%' }}>

            <Text style={{ fontSize: 12,   }}>Trousers</Text>

   </View>
   </TouchableOpacity>
    </View>
     <View style={{ position: 'absolute', left: 0, right: 0, top: '20%', height: '10%', backgroundColor: '#dcdcdc', flexDirection: 'row', alignItems: 'center',   justifyContent: 'space-between' }}>
         <View style={{ flex: 1, height: "100%", marginLeft: '5%', marginRight: '5%' ,justifyContent: 'center' }}>
                                <Item style={{ backgroundColor: 'white', paddingHorizontal: 15, borderRadius: 10,}}>

                                    <Icon name="search" style={{ fontSize: 20, paddingTop: 5 ,  }} />
                                    <Input placeholder="Search"   />

                                         <FAIcon name= 'filter' style={{ fontSize: 30, color: 'red' }} />

                                </Item>
                            </View>

        </View>
         <Content style={{  top: '-29%', backgroundColor: '#d5d5d6'}}>
            <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: 5  }}>


                <RecommendedCardItem
                 itemName="ZARA"
                  itemCreator="Printed Top"
                  itemPrice="Rs. 2999"
                   itemPriceActual=" 3999"
                  savings="25"
                  imageUri={require("Nodeback/assests/img1.jpeg")}
                  rating={5}
                />


            </Card>
            <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: 5  }}>

                      <RecommendedCardItem
                                     itemName="ZARA "
                                      itemCreator="Solid Shirt Style Top"
                                      itemPrice=" Rs. 700"
                                       itemPriceActual=" 1029"
                                      savings="25"
                                      imageUri={require("Nodeback/assests/img2.jpeg")}
                                      rating={4}
                                    />




                        </Card>


                         <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: 5  }}>

                                              <RecommendedCardItem
                                                             itemName="INDIAN TERRAIN"
                                                              itemCreator="Cotton Shirt With Button Flap Pockets "
                                                              itemPrice=" Rs. 637"
                                                              itemPriceActual=" 1029"
                                                              savings="25"
                                                              imageUri={require("Nodeback/assests/img3.jpeg")}
                                                              rating={2.5}
                                                            />




                                                </Card>




 </Content>

      </Container>
);



}




