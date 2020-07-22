import React, {Component} from 'react';
import {Image, View, Alert} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {VisitsActions} from '../redux/actions';


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';


class ProductCounter extends Component {
  isPresentInCartValue(itemId) {
    const {cart} = this.props;

    let itemPresentValue = 0;
    cart.items.map(obj => {
      if (obj.item__c == itemId) {
        itemPresentValue = obj.Quantity__c;
      }
    });
    return itemPresentValue;
  }

  onChangeQuantity(params) {
    const {addItemToCart, removeItemFromCart} = this.props;

    addItemToCart(params);
  }

  onChangeQuantity1(params) {
    const {addItemToCart, removeItemFromCart} = this.props;

    removeItemFromCart(params);
  }

  componentDidMount() {
    const {id, data, Size} = this.props;
  }

  render() {
    const {id, data, Size} = this.props;


    const quantity = '';
    return (

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                      <AntDesign.Button
                                        name="minuscircleo"
                                        size={Size}
                                        iconStyle ={{marginLeft: 3, }}
                                        onPress={() =>
                                          this.onChangeQuantity1({
                                            item__c: id,
                                            Data: data,
                                            Quantity__c: this.isPresentInCartValue(id),
                                            total__c: this.props.total,
                                          })
                                        }
                                        backgroundColor="#fff"
                                        color='#666666'
                                        borderRadius={50}
                                      />
                                      <Text style={{marginTop:hp('1%'), fontSize: wp('4%'), fontWeight:'bold'}}> {this.isPresentInCartValue(id)}</Text>
                                      <AntDesign.Button
                                        name="pluscircleo"
                                          iconStyle ={{marginLeft: 3, } }
                                        size={Size}
                                       backgroundColor="#fff"
                                        color='#666666'
                                        borderRadius={50}
                                        onPress={() =>
                                          this.onChangeQuantity({
                                            item__c: id,
                                            Data: data,
                                            Quantity__c: this.isPresentInCartValue(id),
                                            total__c: this.props.total,
                                          })
                                        }



                                      />
                                    </View>





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
});
const mapDispatchToProps = dispatch => ({
  addItemToCart: params => dispatch(VisitsActions.addItemToCart(params)),
  removeItemFromCart: params =>
    dispatch(VisitsActions.removeItemFromCart(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCounter);