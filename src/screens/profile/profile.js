import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet, View
} from 'react-native';
import {Switch, Badge, List, ListItem, Footer, FooterTab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import styles from './profile.styles.js';
import FooterScreen from '../Footer';

export default class  ProfileScreen extends Component {
render() {
return (
<>
<View style={{flex: 1}}>
<Container>

<Content padder>
        <Card transparent>

          <CardItem >
<Left>

 </Left>
</CardItem>
<CardItem>
                     <Right>
                                     <Text style={styles.name}>  </Text>
                                     </Right>
                     </CardItem>
                     <CardItem>
                     <Right>
                     <Text style={styles.email}>  </Text>
                     </Right>
                     </CardItem>


                     </Card>
<Card bordered style={styles.cardmar}>
                    <CardItem>
         <List>
            <ListItem icon>
                       <Left>
                           <Icon style={styles.icons} active name="menu" />

                       </Left>
                        <Right>
                    <Text style={styles.text1}>All My Orders </Text></Right>
                       <Button style={styles.arrow1}>
                                                      <Icon  active name="ios-arrow-forward" />
                                                    </Button>

                     </ListItem>
                      <ListItem icon>
                   <Left>
                       <Icon style={styles.icon2} active name="ios-bulb" />

                       </Left>
                           <Right>
                       <Text style={styles.text2}>Pending Shipments</Text>
                             <Button style={styles.arrow2} >
                        <Icon active name="ios-arrow-forward" />
                                           </Button>
                                         </Right>
                  </ListItem>
                      <ListItem icon>
                                             <Left>
                                                 <Icon style={styles.icon3} active name="wallet" />

                                             </Left>
                                              <Right>
                                          <Text style={styles.text3}>Pending Payments</Text>
                                             <Button style={styles.arrow3}>
                                                 <Icon  active name="ios-arrow-forward" />
                                               </Button>
                                             </Right>
                                           </ListItem>
                                            <ListItem icon>
                                                                   <Left>
                                                                       <Icon style={styles.icon4} active name="calendar" />

                                                                   </Left>
                                                                    <Right>
                                                                <Text style={styles.text4}>Finished Orders</Text>
                                                                   <Button style={styles.arrow4}>
                                                                       <Icon  active name="ios-arrow-forward" />
                                                                     </Button>
                                                                   </Right>
                                                                 </ListItem>
         </List>
         </CardItem>
         </Card>


<Card bordered style={styles.cardmar}>
                    <CardItem>
         <List>
            <ListItem icon>
                       <Left>
                           <Icon style={styles.icon5} active name="wallet" />

                       </Left>
                        <Right>
                    <Text style={styles.text1}>Loyalty Points </Text></Right>

                       <Button style={styles.arrow5}>
                                                      <Icon  active name="ios-arrow-forward" />

                                                    </Button>

                     </ListItem>
                      <ListItem icon>
                   <Left>
                       <Icon style={styles.icon6} active name="star" />

                       </Left>
                           <Right>
                       <Text style={styles.text6}>Redemptions </Text>
                             <Button style={styles.arrow6} >
                        <Icon active name="ios-arrow-forward" />
                                           </Button>
                                         </Right>
                  </ListItem>
                      <ListItem icon>
                                             <Left>
                                                 <Icon style={styles.icon7} active name="navigate" />

                                             </Left>
                                              <Right>
                                          <Text style={styles.text7}>Shipping Address</Text>
                                             <Button style={styles.arrow7}>
                                                 <Icon  active name="ios-arrow-forward" />
                                               </Button>
                                             </Right>
                                           </ListItem>

         </List>
         </CardItem>
         </Card>
         <Card bordered style={styles.cardmar}>
                                 <CardItem>
                      <List>
                         <ListItem icon>
                                    <Left>
                                        <Icon style={styles.icon5} active name="wallet" />

                                    </Left>
                                     <Right>
                                 <Text style={styles.text1}>Profile Details </Text></Right>
                                    <Button style={styles.arrow5}>
                                                                   <Icon  active name="ios-arrow-forward" />
                                                                 </Button>

                                  </ListItem>
                                   <ListItem icon>
                                <Left>
                                    <Icon style={styles.icon8} active name="star" />

                                    </Left>
                                        <Right>
                                    <Text style={styles.text8}>Coupons </Text>
                                          <Button style={styles.arrow8} >
                                     <Icon active name="ios-arrow-forward" />
                                                        </Button>
                                                      </Right>
                               </ListItem>
                                   <ListItem icon>
                                                          <Left>
                                                              <Icon style={styles.icon9} active name="navigate" />

                                                          </Left>
                                                           <Right>
                                                       <Text style={styles.text9}>Credit</Text>
                                                          <Button style={styles.arrow9}>
                                                              <Icon  active name="ios-arrow-forward" />
                                                            </Button>
                                                          </Right>
                                                        </ListItem>

                      </List>
                      </CardItem>
                      </Card>
                       <Button  danger style={styles.button1}>
                                  <Text style={styles.logout}>Log Out</Text>
                                </Button>

      </Content>

</Container>
</View>
<View>
<FooterScreen/>
</View>

</>
);
}
}
