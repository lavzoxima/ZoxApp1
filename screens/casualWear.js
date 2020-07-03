/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
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
  FlatList
} from 'react-native';
import {connect} from 'react-redux'
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem ,Body, Title} from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import ProductActions from 'ZoxApp1/store/product/Actions'
import RecommendedCardItem from 'ZoxApp1/components/RecommendedCardItem'



class   CasualWearScreen extends Component {


componentDidMount() {
const {
       		productList,
     	} = this.props;

console.log(this.props.productList)



this.props.fetchProducts({

      token     : this.props.token,
      agentid   : this.props.agentid
    })


  }


 renderListItem=({item,index}) => {
 return(
 <View>
     <Image style={{width:100, height:100}}
         source={{uri :item.url}} />
     <View>
        <Text> {item.Name}   </Text>
         <Text> {item.Product_Group__c}   </Text>

 </View>
 </View>

 )
 }


render() {

const {
      		productList,
    	} = this.props;

return (
      <Container>
      <Header style={{ backgroundColor: '#fff', height: '42%', borderBottomColor: '#757575' }}>

<Left style={{ flexDirection: 'row' }}>

                        <FAIcon name="chevron-left" style={{ fontSize: 30, color: 'red' , marginRight: '0%'}} />
                         <Body>
                          <Title style={{ fontSize:35, color: '#a9a9a9' , marginRight: '0%', marginBottom: 10}}>Casual Wear</Title>
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

        <View>
            <FlatList
            data={this.props.productList}
            renderItem={({item,index}) =>this.renderListItem(item,index)}
            KeyExtractor={({item,index}) =>index.toString()}

            />


        </View>



 </Container>
);

}

}
const mapStateToProps = (state) => ({
    token                    : state.user.token,
    agentid                  : state.user.id,
    productList              : state.product.productList

});

const mapDispatchToProps = (dispatch)  => ({
 fetchProducts:(params)   => dispatch(ProductActions.fetchProducts(params)),
});








export default connect(
mapStateToProps ,
 mapDispatchToProps)
 (CasualWearScreen)




