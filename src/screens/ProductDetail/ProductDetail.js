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
import { ProductCounter} from '../../components';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';


class CardImageExample extends Component {


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
        </Card>
    <Card>
    <CardItem>
    <Text style={styles.heading1}> {data.Name} </Text>
    </CardItem>

     <CardItem>
   <View>


    <Text style={{marginTop :wp('-8%'), marginRight : wp('25%') }} >
    <Text style={styles.percent}> (% OFF) </Text>
     <Text style={styles.cutter}>
         {'\u20B9'}     {data.Products_Pricing__r.records.map(obj1 => { return   obj1.MRP__c;
                                                                                                         })


                                                                                                         }
                                  </Text>
                                </Text>

                                <Button style={styles.button1}>
                                               <Icon name='star' size={wp('4%')}/>
                                               <Text style={styles.btntxt}> 4.9 </Text>
                                               </Button>
                                </View>








                            <ProductCounter
                                        id={id}
                                        data={data}
                                        Size={25}

                                       />

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
