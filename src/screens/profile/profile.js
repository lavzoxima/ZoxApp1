import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet, View
} from 'react-native';
import {Switch, Badge, List, ListItem, Footer, FooterTab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import styles from './profile.styles.js';
import FooterScreen from '../Footer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import { ProfileItem} from '../../components';
 class  ProfileScreen extends Component {
render() {
return (
<>
<View style={{flex: 1}}>
<Container>

<Content padder>
        <Card transparent>


<CardItem>

                                     <Text style={styles.name}> {this.props.number}  </Text>

                     </CardItem>



                     </Card>
<Card bordered style={styles.cardmar}>
                    <CardItem>
         <List>



                       <ProfileItem
                       icon1={'menu'}
                       Name={'All My Orders'}
                       icon2={'ios-arrow-forward'}
                       leftStyle={{marginRight: wp('17.5%')}}
                       rightStyle={{marginLeft: wp('16.0%')}}

                       />
                         <ProfileItem
                             icon1={'ios-bulb'}
                             Name={'Pending Shipments'}
                           icon2={'ios-arrow-forward'}
                             leftStyle={{marginRight: wp('15.5%')}}
                            rightStyle={{marginLeft: wp('5.0%')}}
                                              />
                         <ProfileItem
                                              icon1={'wallet'}
                                              Name={'Pending Payments'}
                                              icon2={'ios-arrow-forward'}
                                                leftStyle={{marginRight: wp('15.5%')}}
                                                rightStyle={{marginLeft: wp('7.0%')}}
                                              />
                            <ProfileItem
                                                 icon1={'calendar'}
                                                 Name={'Finished Orders'}
                                                 icon2={'ios-arrow-forward'}
                                                  leftStyle={{marginRight: wp('15.5%')}}
                                                  rightStyle={{marginLeft: wp('13.0%')}}
                                                 />

         </List>
         </CardItem>
         </Card>


<Card bordered style={styles.cardmar}>
                    <CardItem>
         <List>
             <ProfileItem
                                  icon1={'wallet'}
                                  Name={'Loyalty Points '}
                                  icon2={'ios-arrow-forward'}
                                   leftStyle={{marginRight: wp('15.5%')}}
                                  rightStyle={{marginLeft: wp('15.0%')}}
                                  />
                                    <ProfileItem
                                        icon1={'star'}
                                        Name={'Redemptions'}
                                      icon2={'ios-arrow-forward'}
                                       leftStyle={{marginRight: wp('15.5%')}}
                                        rightStyle={{marginLeft: wp('18.0%')}}

                                                         />
                                    <ProfileItem
                                                         icon1={'navigate'}
                                                         Name={'Shipping Address'}
                                                         icon2={'ios-arrow-forward'}
                                                         leftStyle={{marginRight: wp('13.5%')}}
                                                       rightStyle={{marginLeft: wp('11.0%')}}
                                                         />
         </List>
         </CardItem>
         </Card>
         <Card bordered style={styles.cardmar}>
                                 <CardItem>
                      <List>
                      <ProfileItem
                                                        icon1={'person'}
                                                        Name={'Profile Details'}
                                                        icon2={'ios-arrow-forward'}
                                                          leftStyle={{marginRight: wp('11.5%')}}
                                                          rightStyle={{marginLeft: wp('20.5%')}}
                                                        />
                                                          <ProfileItem
                                                              icon1={'star'}
                                                              Name={'Coupons'}
                                                            icon2={'ios-arrow-forward'}
                                                            leftStyle={{marginRight: wp('13.5%')}}
                                                           rightStyle={{marginLeft: wp('28.5%')}}
                                                                               />



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
const mapStateToProps = state => ({
  number: state.user.number,
  password: state.user.password,
  userLoginIsLoading: state.user.userLoginIsLoading,
  userLoginErrorMessage: state.user.userLoginErrorMessage,
});

export default connect(
  mapStateToProps,
null,
)(ProfileScreen);

