import React, {Component} from 'react';
import {Image, View, FlatList} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Right,
  Spinner,
  Body
} from 'native-base';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Cart.styles';
import {VisitsActions} from '../../redux/actions';
import FooterScreen from '../Footer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ServerImage} from '../../components';
import { ProductCounter, showToast} from '../../components';
import DistributorScreen from './DistributorScreen'
import { createOrderDetails } from '../../utils/api/cart.api';

class ListExample extends Component {
  componentDidMount() {
    const {cart} = this.props;

    this.props.getAllDistributor();
  }

  getDataToPostToCreateOrder = () => {
    let { cart: {items} = {}, distributor } = this.props;
    let currentDate = new Date();
    let orderLineItems = [];
    items.forEach((item, index) => {
      let productPrice = null;
      try {
        productPrice = item.Data.Products_Pricing__r.records[0].Customer_Price__c;
      } catch(err) {}
      orderLineItems.push({
        attributes: {type: 'E_Order_line__c', referenceId: `ref${index + 2}`},
        Product_Category__c: null,
        Product_Sub_Category__c: null,
        Product_Group__c: (item && item.Data && item.Data.Product_Group__c) || null,
        Product__c: (item && item.Data && item.Data.id) ||  (item && item.item__c) || null,
        Quantity__c: (item && item.Quantity__c) || null,
        Discount__c: null,
        Amount_Net_cost__c: productPrice,
        CGST__c: null,
        SGST_UTGST__c: null,
        IGST__c: null,
      });
    });
    return {
      records: [
        {
          attributes: {type: 'E_Order__c', referenceId: 'ref1'},
          Distributor__c: distributor,
          Order_Delivery__c: 'Pending',
          Bill_To_Customer__c: null,
          Order_Date__c: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
          Scheme__c: null,
          Discount__c: null,
          Billing_City__c: null,
          BIlling_Country__c: null,
          Billing_State__c: null,
          Billing_Street__c: null,
          Billing_Zip_PostalCode__c: null,
          Street__c: null,
          State__c: null,
          City__c: null,
          Country__c: null,
          E_Order_lines__r: {
            records: orderLineItems,
          },
        },
      ]
    }
  }

  onPlaceOrderClick = () => {
    let { cart: {items} = {}, distributor, token } = this.props;
    if (!items || !items.length) {
      showToast("Please add products in cart");
      return;
    }
    if (!distributor) {
      showToast("Please select distributor");
      return;
    }
    let createOrderApiData = this.getDataToPostToCreateOrder();
    createOrderDetails(createOrderApiData, token).then(res => {
      showToast("Order created successfully", 1000);
    }).catch(err => {
      showToast("Unable to create order.", 1000);
      console.warn("order create error: ", err.message);
    })
  }

  renderListItem(item, index) {
    return (
      <Card style={{marginLeft: '2.5%', marginRight: '2.5%',   backgroundColor:'#f5f5f5'}}>
        <CardItem >
         <View>
             <ServerImage
                          height={105}
                          width={75}
                          entityId={item.Data.Id}
                          onError={({nativeEvent: {error}}) => {
                            console.warn('image load error: ', item.Data.Id, error);
                          }}
                        />
                  </View>
          <Right
                     style={{
                       flex: 1,
                       alignItems: 'flex-start',
                       height: 110,
                       paddingHorizontal: 30,
                     }}>
          <Text style={styles.straight}>{item.Data.Name}</Text>
          <Text style={styles.size}>  </Text>

           <Text style={styles.ruppee}>
                        {'\u20B9'} {item.total__c}
                      </Text>
           <ProductCounter
            id={item.Data.Id}
            data={item.Data}
            Size={20}

           />

        </Right>
        </CardItem>

      </Card>
    );
  }

  render() {
    const {cart} = this.props;

    let totalPrice = 0;
    cart.items.forEach(item => {
      totalPrice += item.total__c;
    });

    return (

            <>
          <View style={{flex: 1,  color:'#f5f5f5'}}>

      <Container style={{backgroundColor:'#f5f5f5',  }}>
        <Text style={styles.cart}> Cart </Text>
        <Content >
          <Card  style={{marginLeft: '2.5%', marginRight: '2.5%', marginTop: 5, }} >
            <CardItem style={{ borderRadius: wp('10.5%'),}}>
            <Body>
              <Text style={styles.cart}>
                <MaterialCommunityIcons name="brightness-percent" size={20} />
                   <Text style={styles.offertext}> Available Offers </Text>
              </Text>


               <Text style={styles.shoptext}>
                              Shop above {'\u20B9'} 50,000 & get 50% Discount on all items
                            </Text>
              </Body>
            </CardItem>
 </Card>

          <View
            style={{

              backgroundColor: '#f5f5f5',

            }}>
            {cart.items && cart.items.length ? (
              <FlatList
                data={cart.items}
                renderItem={({item, index}) => this.renderListItem(item, index)}
                keyExtractor={item => item.Data.Id}
              />
            ) : (
              <View style={{justifyContent: 'center',
                                    alignItems: 'center',}}><Text>No Products Added </Text></View>
            )}
          </View>



          <Card  style={{marginLeft: '2.5%', marginRight: '2.5%', }}>
            <CardItem>
              <Text>
                <FontAwesome5 name="tag" size={wp('5%')} />
              </Text>
              <Left>
                <Text style={styles.coupon}> Apply Coupon </Text>
              </Left>
              <Right>
                <MaterialIcons
                  style={styles.arrow}
                  name="keyboard-arrow-right"
                  size={wp('6%')}
                />
              </Right>
            </CardItem>
          </Card>
          <Card style={{marginLeft: '2.5%', marginRight: '2.5%', marginTop: '5%' }}>
            <CardItem>
                     <DistributorScreen/>
            </CardItem>

          </Card>
          <Card  style={{marginLeft: '2.5%', marginRight: '2.5%', marginTop: '5%'}}>
            <CardItem>
              <Left>
                <View>
                <Text style={styles.details}>
                  PRICE DETAILS ({this.props.cart.items.length} Items)
                </Text>
                 <Text style={styles.bag}>Bag Total</Text>
                  <Text style={styles.dis}>Bag Discount</Text>
                    <Text style={styles.coudis}>Coupon Discount</Text>
                    <Text style={styles.orto}>Order Total</Text>
                     <Text style={styles.dech}>Delivery Charges</Text>
                      <Text style={styles.tot}>Total</Text>
                  </View>
              </Left>
                       <View>
             <Right>
                            <Text style={styles.rs}>{'\u20B9'} </Text>
                            <Text style={styles.mirs}>-{'\u20B9'}</Text>
                             <Text style={styles.apcou}>Apply Coupon</Text>
                             <Text style={styles.rs1}>{'\u20B9'} </Text>
                             <Text style={styles.top}>
                                               <Text style={styles.strike}>{'\u20B9'} </Text>
                                               <Text style={styles.free}> Free </Text>
                                             </Text>
                             <Text style={styles.tors}>
                                              {'\u20B9'} {totalPrice}
                                            </Text>

                          </Right>
                          </View>

                 </CardItem>

          </Card>
          <Card  style={{marginLeft: '2.5%', marginRight: '2.5%', }}>
            <CardItem>
              <Left>
                <Image
                  source={{
                    uri:
                      'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2076518/910/607/m1/fpnw/wm0/crown_cm-.jpg?1483088051&s=b9c856f4c39a2816024c38750abb0efd',
                  }}
                  style={{height: 45, width: 50}}
                />
              </Left>

              <Text style={styles.loyal}>
                <Text style={styles.points}> You will earn </Text>
                <Text style={styles.green}> 20 </Text>
                <Text style={styles.points}>
                  Loyalty Points on this Purchase.
                </Text>
              </Text>
            </CardItem>
          </Card>
        </Content>

        <Card transparent footer  style={{marginLeft: '2.5%', marginRight: '2.5%',backgroundColor: 'transparent' }}>
          <CardItem style={{backgroundColor: 'transparent' , height: hp('10%')}} >
            <Left>
            <View Style= {{flexDirection : 'row'}}>
              <Text style={styles.ftext}>Total</Text>

              <Text style={styles.frs}>{'\u20B9'} </Text>

               <Text style={styles.fsh}> Free Domestic Shipping </Text>
             </View>
            </Left>
             <Right>
                                    <Button rounded  style={styles.fbtn} onPress={this.onPlaceOrderClick}>
                                               <Text>
                                                 <Text style={styles.fbtxt}>Place Order </Text>
                                                 <Text>
                                                   <Ionicons
                                                     style={styles.fti}
                                                     name="ios-arrow-dropright-circle"
                                                     size={20}
                                                   />
                                                 </Text>
                                               </Text>
                                             </Button>
                                   </Right>
          </CardItem>







        </Card>
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
  token: state.user.token,
  agentid: state.user.id,
  productList: state.product.productList,
  cart: state.visits.cart,
  quantity: state.visits.quantity,
  total: state.visits.total,
  distributor: state.visits.searchFilters.distributors
});
const mapDispatchToProps = dispatch => ({
  addItemToCart: params => dispatch(VisitsActions.addItemToCart(params)),
  removeItemFromCart: params =>
    dispatch(VisitsActions.removeItemFromCart(params)),
   getAllDistributor: params => dispatch( VisitsActions.getAllDistributor(params)),
    updateSearchFilters: (params)    => dispatch(VisitsActions.updateDistributorSearchFilters(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListExample);
