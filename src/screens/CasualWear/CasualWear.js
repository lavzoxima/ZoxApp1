import React, {Component} from 'react';
import {TouchableOpacity, View, Text, Image, FlatList, ScrollView} from 'react-native';
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
  Spinner,
} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {ProductActions} from '../../redux/actions';
import StarRating from 'react-native-star-rating';
import styles from './CasualWear.styles';
import * as NavigationService from '../../utils/navigation';
import FooterScreen from '../Footer';

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
      <Card style={{marginLeft: '5%', marginRight: '5%', marginTop: 5}}>
        <CardItem button onPress={() => this.handlePress(item)}>
          <View>
            <Image
              style={{height: 95, width: 65}}
              source={{uri: item.attributes.url}}
            />
          </View>

          <Right
            style={{
              flex: 1,
              alignItems: 'flex-start',
              height: 90,
              paddingHorizontal: 20,
            }}>
            <Text>{item.Name}</Text>
            <Text style={{color: 'grey', fontSize: 11}} />
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>
              {item.Products_Pricing__r.records.map(obj1 => {


                                                         return   obj1.MRP__c;
                                                          })


                                                          }


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
                  {item.Products_Pricing__r.records.MRP__c}
                </Text>
                ({this.props.savings}% OFF)
              </Text>
            </View>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={this.props.rating}
              starSize={12}
              fullStarColor="orange"
              emptyStarColor="orange"
            />
          </Right>
        </CardItem>
      </Card>
    );
  }

  render() {
    const {productList} = this.props;

    return (
            <>
            <View style={{flex: 1}}>

      <Container >
        <Header
          style={{
            backgroundColor: '#fff',
            height: '42%',
            borderBottomColor: '#757575',
          }}>
          <Left style={{flexDirection: 'row'}}>
            <FAIcon name="chevron-left" style={{fontSize: 30, color: 'red'}} />
          </Left>
          <Right>
            <Title
              style={{
                fontSize: 35,
                color: '#a9a9a9',
                marginBottom: 10,
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
                width: 75,
                backgroundColor: '#fff',
                height: 45,
                borderRadius: 20,
                padding: 15,
                alignItems: 'center',
                marginLeft: '10%',
              }}>
              <Text style={{fontSize: 12}}>Shirts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 75,
                backgroundColor: '#fff',
                height: 45,
                borderRadius: 20,
                padding: 15,
                alignItems: 'center',
                marginRight: '5%',
              }}>
              <Text style={{fontSize: 12}}> T-Shirt</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 75,
                backgroundColor: '#fff',
                height: 45,
                borderRadius: 20,
                padding: 15,
                alignItems: 'center',
                marginRight: '5%',
              }}>
              <Text style={{fontSize: 12}}>Denims</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                width: 80,
                backgroundColor: '#fff',
                height: 45,
                borderRadius: 20,
                padding: 15,
                alignItems: 'center',
                marginRight: '5%',
              }}>
              <Text style={{fontSize: 12}}>Trousers</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: '20%',
            height: '10%',
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
              <FAIcon name="filter" style={{fontSize: 30, color: 'red'}} />
            </Item>
          </View>
        </View>

        <View style={{marginTop: '-18%', backgroundColor: '#f5f5f5', }}>
          {productList && productList.length ? (
            <FlatList
              data={productList}
              renderItem={({item, index}) => this.renderListItem(item, index)}
              keyExtractor={item => item.Id}
            />
          ) : (
            <View style={{justifyContent: 'center',
                              alignItems: 'center',}}><Spinner color='#a9a9a9'/></View>
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
