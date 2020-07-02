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


this.props.fetchProducts({

      token     : this.props.token,
      agentid   : this.props.agentid
    })
  }

render() {

const {
      		productList,
    	} = this.props;

return (
      <Container>
      <Header style={{ backgroundColor: '#fff', height: '42%', borderBottomColor: '#757575' }}>

<Left style={{ flexDirection: 'row' }}>

                        <FAIcon name="chevron-left" style={{ fontSize: 30, color: 'red' }} />
                         <Body>
                          <Title style={{ fontSize:35, color: '#a9a9a9' , marginRight: '30%', marginBottom: 10}}>Casual Wear</Title>
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
                                         <FAIcon name= 'filter' style={{ fontSize: 30, color: 'red' }} />

     <View style={{ position: 'absolute', left: 0, right: 0, top: '20%', height: '10%', backgroundColor: '#dcdcdc', flexDirection: 'row', alignItems: 'center',   justifyContent: 'space-between' }}>
         <View style={{ flex: 1, height: "100%", marginLeft: '5%', marginRight: '5%' ,justifyContent: 'center' }}>
                                <Item style={{ backgroundColor: 'white', paddingHorizontal: 15, borderRadius: 10,}}>

                                    <Icon name="search" style={{ fontSize: 20, paddingTop: 5 ,  }} />
                                    <Input placeholder="Search"   />

                                </Item>
                            </View>

        </View>
         <Content style={{  top: '-20 %', backgroundColor: '#d5d5d6'}}>
            <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: 5  }}
             dataArray={this.props.productList}

                 renderRow={(item) => {
                         return (
                           <RecommendedCardItem  productList={item} />
                         )
                     }}


            />







 </Content>

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




