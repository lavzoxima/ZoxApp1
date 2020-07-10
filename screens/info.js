import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet,
} from 'react-native';
import {Switch, Badge, List, ListItem, Footer, FooterTab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import styles from './infostyle';

export default class ListExample extends Component {
render() {
return (
  <Container>

  <Content padder>
            <Card transparent>

              <CardItem >
 <Left>
    <Image source={{uri: 'https://steemitimages.com/DQmcgvDrzfG3Zg7EvTSJ3NZkcw9gsWnh3Aa2HNrSZ7nHD6g/eden_a.jpg'}} style={{height: 150, width:150, marginLeft: -20}} />
     </Left>
</CardItem>
 <CardItem>
                         <Right>
                                         <Text style={styles.name}> Nikita Jindal </Text>
                                         </Right>
                         </CardItem>
                         <CardItem>
                         <Right>
                         <Text style={styles.email}> nikita.jindal@zoxima.com </Text>
                         </Right>
                         </CardItem>
                          <CardItem>
                                              <Right>
                                              <Button style={styles.buttoncrown}>
                                              <Image source={{uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2076518/910/607/m1/fpnw/wm0/crown_cm-.jpg?1483088051&s=b9c856f4c39a2816024c38750abb0efd'}} style={{height: 45,width:50}} />
                                               <Text style={styles.buttontext}>400 Loyalty Points</Text>
                                                       </Button>
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
          <Footer >
                             <FooterTab style={styles.footer1}>
                               <Button vertical >
                                 <Icon  name="home" />
                                 <Text >Home</Text>
                               </Button>
                               <Button badge vertical>
                                             <Badge><Text>3</Text></Badge>
                                 <Icon name="cart" />
                                 <Text>Cart</Text>
                               </Button>
                               <Button vertical >
                                 <Icon style={styles.ftricon} active name="person" />
                                 <Text style={styles.ftricon}>Profile</Text>
                               </Button>
                               <Button vertical>
                                 <Icon name="menu" />
                                 <Text>More</Text>
                               </Button>
                             </FooterTab>
                           </Footer>
  </Container>
);
}
}


