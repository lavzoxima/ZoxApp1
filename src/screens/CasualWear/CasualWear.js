import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Card,
  CardItem,
  Title,
  Spinner
} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {ProductActions} from '../../redux/actions';
import StarRating from 'react-native-star-rating';
import styles from './CasualWear.styles';
import * as NavigationService from '../../utils/navigation';
import FooterScreen from '../Footer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Filter from './Filter';
import {ServerImage} from '../../components';


class CasualWearScreen extends Component {
  componentDidMount() {
    this.props.fetchProducts({
      token: this.props.token,
      agentid: this.props.agentid,
    });
  }

  handlePress(item) {
    NavigationService.navigate('CardImageExample', {id: item.Id, data: item});
  }

  renderListItem(item, index) {
    return (
      <Card style={{marginLeft: '5%', marginRight: '5%', marginTop: hp('1%')}}>
        <CardItem button onPress={() => this.handlePress(item)}>
          <View>
            <ServerImage
              height={hp('12.5%')}
              width={wp('15%')}
              entityId={item.Id}
              onError={({nativeEvent: {error}}) => {
                console.warn('image load error: ', item.Id, error);
              }}
            />
          </View>

          <Right
            style={{
              flex: 1,
              alignItems: 'flex-start',
              height: hp('15%'),
              paddingHorizontal: 20,
            }}>
            <Text style={{fontSize: wp('3.5%'),color: '#a9a9a9', fontWeight:"bold" }}>{item.Name}</Text>

            <Text style={{fontSize: wp('4%'), fontWeight: 'bold', color: '#c4402f', marginTop:hp('2%')}}>
              {item.Products_Pricing__r.records.map( obj1 => {

              return obj1.Customer_Price__c;
              })}





            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#c4402f',
                  marginRight: '12%',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontWeight: 'bold',
                    fontSize: 15,
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid',

                  }}>
                  {item.Products_Pricing__r.records.map(
                                                            obj1 => {

                                                              return obj1.MRP__c;
                                                            },
                                                          )}
                </Text>
                ({this.props.savings}% OFF)
              </Text>
            </View>
            <View style={{marginTop: hp('1%')}}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={12}
              fullStarColor="orange"
              emptyStarColor="orange"
            />
            </View>
          </Right>
        </CardItem>
      </Card>
    );
  }

  render() {
    const {productList} = this.props;

    return (

      <>
     <View style={{flex: 1, }}>

      <Container>
        <Header
          style={{
            backgroundColor: '#fff',
            height: '42%',
            borderBottomColor: '#757575',
          }}>
          <Left style={{flexDirection: 'row'}}>
            <FAIcon name="chevron-left" style={{fontSize: wp('8%'), color: '#ff6347'}} />
          </Left>
          <Right>
            <Title
              style={{
                fontSize: wp('8%'),
                color: '#a9a9a9',
                marginBottom: hp('1%'),
                marginRight: '30%',
              }}>
              Casual Wear
            </Title>
          </Right>
        </Header>

        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '8%',
            height: '10%',
            backgroundColor: '#f5f5f5',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <TouchableOpacity>
            <View
              style={{
                width: wp('19.5%'),
                backgroundColor: '#fff',
                height: hp('6.5%'),
                borderRadius: wp('4%'),
                padding: 10,
                alignItems: 'center',
                marginLeft: '10%',
              }}>
              <Text style={{fontSize: wp('3.5%')}}>Shirts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
              width: wp('19.5%'),
                              backgroundColor: '#fff',
                              height: hp('6.5%'),
                              borderRadius: wp('4%'),
                              padding: 10,
                              alignItems: 'center',


                marginRight: wp('5.5%'),
              }}>
              <Text style={{fontSize: wp('3.5%')}}> T-Shirt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#fff',
                                             height: hp('6.5%'),
                                             borderRadius: wp('4%'),
                                             padding: 10,
                                             alignItems: 'center',


                               marginRight: wp('3.5%'),
              }}>
              <Text style={{fontSize: wp('3.5%')}}>Denims</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
               backgroundColor: '#fff',
                                                           height: hp('6.5%'),
                                                           borderRadius: wp('4%'),
                                                           padding: 10,
                                                           alignItems: 'center',


                                             marginRight: wp('3.5%'),
              }}>
              <Text style={{fontSize: wp('3.5%')}}>Trousers</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: hp('16%'),
            height: hp('10%'),
            backgroundColor: '#f5f5f5',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 1,
              height: '100%',
              marginLeft: '5%',
              marginRight: '5%',
              justifyContent: 'center',
            }}>
            <Item
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderRadius: 10,
              }}>
              <Icon name="search" style={{fontSize: 20, paddingTop: 5}} />
              <Input placeholder="Search" />
              <Filter
                filters={{
                  male: 'MALE',
                  female: 'FEMALE',
                  discounted: 'DISCOUNTED PRODUCTS',
                }}
                onFilterChange={filterValue => {
                  console.warn('filter changed: ', filterValue);
                }}
              />
            </Item>
          </View>
        </View>

        <View style={{marginTop: '-18%', backgroundColor: '#f5f5f5'}}>
          {productList && productList.length ? (
            <FlatList
              data={productList}
              renderItem={({item, index}) => this.renderListItem(item, index)}
              keyExtractor={item => item.Id}
            />
          ) : (
           <Spinner color='#a9a9a9'/>
          )}
        </View>
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
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: params => dispatch(ProductActions.fetchProducts(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CasualWearScreen);
