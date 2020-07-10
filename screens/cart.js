import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet, View, FlatList
} from 'react-native';
import {Switch, Badge, List, ListItem, Footer, FooterTab, Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './cartstyle';
import { connect } from 'react-redux';
import VisitsActions from 'ZoxApp1/store/cart/Actions'


 class ListExample extends Component {

 componentDidMount() {
 const {
        		cart,
      	} = this.props;







   }



onChangeQuantity(params) {
   		const {
   		 	addItemToCart,
   			removeItemFromCart
   		} = this.props;



   			addItemToCart(params)

   	}

onChangeQuantity1(params) {
   		const {
   		 	addItemToCart,
   			removeItemFromCart
   		} = this.props;


   			removeItemFromCart(params);


   	}

	isPresentInCartValue(itemId) {
  		const {
	      cart
	    } = this.props;

	   let itemPresentValue = 0;
	   cart.items.map((obj) => {
	   		if (obj.item__c == itemId) {
	   			itemPresentValue = obj.Quantity__c
	   		}
	   });
	   return itemPresentValue
  	}


renderListItem(item,index){
   return(
   <Card transparent >
   <CardItem>
   <Left>

   <Image  source={{uri : item.Data.url}}  style={{height:100, borderRadius: 60, width:90}}/>
     <Text style={styles.straight}>{item.Data.Name}</Text>
   </Left>
  </CardItem>
   <CardItem>
   <Left>
   <Text style={styles.size}> Size 7, Green </Text></Left></CardItem>
   <CardItem>
   <Left>
   <Text style={styles.ruppee}>  {'\u20B9'} 5000  </Text></Left>
   </CardItem>
   <CardItem>
   <Left>

   <Text style={styles.buttonplusminus}> <AntDesign style={styles.plusminuscircle} name="minuscircle" size={30}/> {item.Quantity__c} <AntDesign style={styles.plusminuscircle} name="pluscircle" size={30}/></Text>
   </Left>
   </CardItem>
   </Card>


    );
 }





render() {
const {
      	 cart 	,
    	} = this.props;

 console.log(  cart);
 console.log(cart.length);




return (
  <Container >
<Text style={styles.cart}> Cart </Text>
  <Content padder>
<Card bordered style={styles.card1}>
         <CardItem>
             <Text style={styles.cart}>
            <MaterialCommunityIcons name="brightness-percent"  size={20} />
              </Text>
              <Text style={styles.offertext}> Available Offers </Text>
         </CardItem>
         <CardItem style={styles.cardmar1}>
         <Text style={styles.shoptext}> Shop above {'\u20B9'} 50,000 & get 50% Discount on all items </Text>
         </CardItem>
</Card>

 <View style={{marginTop:'5%', backgroundColor: '#f5f5f5', marginBottom: '5%',}}>
          {

            cart.items && cart.items.length ? <FlatList
              data={cart.items}
               renderItem={({ item, index })=> this.renderListItem(item,index)}
              keyExtractor={(item) => item.Data.Id}
            /> : <Text>Loading ....</Text>
          }


        </View>











<Card>
<CardItem>

</CardItem>
</Card>


<Card bordered style={styles.cardmar5}>
<CardItem>
<Text>
<FontAwesome5  name="tag" size={30}/>
</Text>
<Left>
<Text style = {styles.coupon}> Apply Coupon </Text>
</Left>
<Right>
<MaterialIcons style={styles.arrow} name="keyboard-arrow-right" size={30}/>
</Right>
</CardItem>
</Card>
<Card>
<CardItem>
<Left>
<Text style={styles.Distributor}> Select Distributor </Text>
</Left>
<Right>
<MaterialIcons style={styles.arrow1} name="keyboard-arrow-up" size={30}/>
</Right>
</CardItem>
<CardItem>
<Left>
<Text style={styles.Traders}> H.K Traders </Text>
</Left>
</CardItem>
<CardItem>
<Left>
<Text style={styles.Clothing}>A.V Clothing </Text>
</Left>
</CardItem>
</Card>
<Card>
<CardItem>
<Left>
<Text style={styles.details}>PRICE DETAILS (21 Items)</Text>
</Left>
</CardItem>
<CardItem>
<Left>
<Text style={styles.bag}>Bag Total</Text>
</Left>
<Right>
<Text style={styles.rs}>{'\u20B9'} 31000</Text>
</Right>
</CardItem>
<CardItem>
<Left>
<Text style={styles.dis}>Bag Discount</Text>
</Left>
<Right>
<Text style={styles.mirs}>-{'\u20B9'} 3000</Text>
</Right>
</CardItem>
<CardItem>
<Left>
<Text style={styles.coudis}>Coupon Discount</Text>
</Left>
<Right>
<Text style={styles.apcou}>Apply Coupon</Text>
</Right>
</CardItem>
<CardItem>
<Left>
<Text style={styles.orto}>Order Total</Text>
</Left>
<Right>
<Text style={styles.rs1}>{'\u20B9'} 29000</Text>
</Right>
</CardItem>
<CardItem>
<Left>
<Text style={styles.dech}>Delivery Charges</Text>
</Left>
<Right>
<Text style={styles.top}>
<Text style={styles.strike}>{'\u20B9'} 2000</Text>
<Text style={styles.free}> Free </Text>
</Text>
</Right>
</CardItem>
<CardItem>
<Left>
<Text style={styles.tot}>Total</Text>
</Left>
<Right>
<Text style={styles.tors}>{'\u20B9'} 29,000</Text>
</Right>
</CardItem>
</Card>
<Card>
<CardItem>
<Left>
  <Image source={{uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/2076518/910/607/m1/fpnw/wm0/crown_cm-.jpg?1483088051&s=b9c856f4c39a2816024c38750abb0efd'}} style={{height: 45,width:50}} />
 </Left>

 <Text style={styles.loyal}>
 <Text style={styles.points}> You will earn </Text>
 <Text style={styles.green}> 20 </Text>
 <Text style={styles.points}> Loyalty Points on this Purchase. </Text>
 </Text>

</CardItem>
</Card>
  </Content>

  <Card transparent footer>
                                <CardItem>
                                <Left>
                                <Text style={styles.ftext}>Total</Text>
                                </Left>
                                 </CardItem>

                                  <CardItem style={styles.fmar}>
                                    <Left>
                                <Text style={styles.frs}>{'\u20B9'} 29,000</Text>
                                </Left>
                                </CardItem>
                                 <CardItem style={styles.fmar1}>
                                   <Left>
                                <Text style={styles.fsh}> Free Domestic Shipping </Text>
                                </Left>
                                </CardItem>

                                <Button rounded danger style={styles.fbtn}>
                                <Text>
                                            <Text style={styles.fbtxt}>Place Order  </Text>
<Text> <Ionicons style={styles.fti} name="ios-arrow-dropright-circle" size={20}/> </Text>
                                </Text>
                                          </Button>

                                </Card>

  </Container>
);
}
}
const mapStateToProps = (state) => ({
    token                    : state.user.token,
    agentid                  : state.user.id,
    productList              : state.product.productList,
     cart 						: state.visits.cart,
     quantity : state.visits.quantity,

});
const mapDispatchToProps = (dispatch) => ({

  addItemToCart:(params)                => dispatch(VisitsActions.addItemToCart(params)),
  removeItemFromCart:(params)           => dispatch(VisitsActions.removeItemFromCart(params))
});

export default connect(
mapStateToProps ,
 mapDispatchToProps
)
(ListExample)

