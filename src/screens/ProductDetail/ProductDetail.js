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
import {VisitsActions} from '../../redux/actions';
import styles from './ProductDetail.styles';
import {ServerImage} from '../../components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';


class CardImageExample extends Component {
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
    const {id, data} = this.props.navigation.state.params;
  }

  render() {
    const {id, data} = this.props.navigation.state.params;

    const quantity = '';
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent style={styles.headericon}>
              <Icon style={styles.headericon} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={styles.title}>Casual Wear</Title>
          </Body>
        </Header>

        <Content>
          <Card>

            <CardItem cardBody>
               <ServerImage
                            height={hp('50%')}
                            width={wp('100%')}
                            entityId={id}
                            onError={({nativeEvent: {error}}) => {
                              console.warn('image load error: ', id, error);
                            }}
                          />
            </CardItem>
            <CardItem>

                    <View>
                <Text style={styles.heading1}> {data.Name} </Text>
                  <Text style={{marginTop :'4%', marginRight: '20%'}} >
                                  <Text style={styles.percent}> (% OFF) </Text>
                                  <Text style={styles.cutter}>
                                    {'\u20B9'}     {data.Products_Pricing__r.records.map(obj1 => { return   obj1.MRP__c;
                                                                                                         })


                                                                                                         }
                                  </Text>
                                </Text>
                                <View style={{marginTop: '2%'}}>
                                  <StarRating
                                                                          disabled={true}
                                                                             maxStars={5}
                                                                             starSize={wp('4%')}
                                                                           fullStarColor="orange"
                                                                   emptyStarColor="orange"/></View>


</View>














               <Right style={{marginLeft:'35%'}}>
                              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <AntDesign.Button
                                  name="minuscircleo"
                                  size={30}
                                  iconStyle ={{marginLeft: 5, }}
                                  onPress={() =>
                                    this.onChangeQuantity1({
                                      item__c: id,
                                      Data: data,
                                      Quantity__c: this.isPresentInCartValue(id),
                                      total__c: this.props.total,
                                    })
                                  }
                                  backgroundColor="#f5f5f5"
                                  color='red'
                                  borderRadius={50}
                                />
                                <Text> {this.isPresentInCartValue(id)}</Text>
                                <AntDesign.Button
                                  name="pluscircleo"
                                    iconStyle ={{marginLeft: 5, } }
                                  size={30}
                                 backgroundColor="#f5f5f5"
                                  color='red'
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
                            </Right>
            </CardItem>


          </Card>

          <Card>
            <CardItem>
              <Left>
                <Text style={styles.size}> SIZE </Text>
              </Left>
            </CardItem>
            <CardItem>

              <Button style={styles.buttons1}
                onPress={()=> Alert.alert('XS')}
              >
                <Text style={styles.buttontext}> XS </Text>
              </Button>
              <Text> </Text>
              <Button style={styles.buttons1}>
                <Text style={styles.buttontext}> S </Text>
              </Button>
              <Text> </Text>
              <Button style={styles.buttons1}>
                <Text style={styles.buttontext}> M </Text>
              </Button>
              <Text> </Text>
              <Button style={styles.buttons1}>
                <Text style={styles.buttontext}> L </Text>
              </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text style={styles.details}> Product Details </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Text style={styles.sleeve}> Sleeve </Text>
              </Left>
              <Right>
                <Text style={styles.short}>{data.Sleeve__c} </Text>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Text style={styles.sleeve}> Fabric </Text>
              </Left>
              <Right>
                <Text style={styles.short}>{data.Fabric_Types__c} </Text>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Text style={styles.sleeve}> Neck Type </Text>
              </Left>
              <Right>
                <Text style={styles.short}>{data.Neck_Type__c} </Text>
              </Right>
            </CardItem>

            <CardItem>
              <Left>
                <Text style={styles.sleeve}> Pattern </Text>
              </Left>
              <Right>
                <Text style={styles.short}>{data.Pattern__c} </Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
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
)(CardImageExample);
