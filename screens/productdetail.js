import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet,
TouchableHighlight ,
View,
TouchableOpacity,
Alert
} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import styles from './productdetailstyle';
import AntDesign from "react-native-vector-icons/AntDesign";
import { connect } from 'react-redux';
import VisitsActions from 'ZoxApp1/store/cart/Actions'


 class CardImageExample extends Component {
submit = () => {
                    console.log('in submit')

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
	   			itemPresentValue = obj.unique_product_count__c
	   		}
	   });
	   return itemPresentValue
  	}

    componentDidMount() {
       const {
         id,
         data
       } = this.props.navigation.state.params;

     }




render() {


const {
      id,
      data
    } = this.props.navigation.state.params;




return (
  <Container>
     <Header style={styles.header}>
              <Left>
                <Button transparent style={styles.headericon}>
                  <Icon style={styles.headericon}name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title style={styles.title}>Casual Wear</Title>
              </Body>
            </Header>

<Content>
  <Card>
    <CardItem>

    </CardItem>
    <CardItem cardBody>


<Image source={{uri:data.attributes.url }} style={{height: 350, width: 250, flex: 1}} />

    </CardItem>
   <CardItem>
                 <Left>
                   <Text  style={styles.heading1}> {data.Name } </Text>
</Left> 
                 </CardItem>
                 <CardItem>
                  <Left>
                                <Text style={styles.percut}>
                                <Text style={styles.percent}> (50% OFF)  </Text>
                              <Text style={styles.cutter}>  {'\u20B9'} {data.Products_Pricing__r.records.MRP__c}  </Text>

                 </Text>
                 </Left>


                 </CardItem>
                 <CardItem>
                 <Left>
                 <Button danger style={styles.button1}>
                 <Icon name='star' size={10}/>
                 <Text style={styles.btntxt}> 4.9 </Text>
                 </Button>
                 </Left>
                 <Right >
                 <View style={{flexDirection: 'row', justifyContent:'center' }}>
                 <AntDesign.Button name="minuscircle" size={30}   onPress={() => this.onChangeQuantity1({item__c:id,Data: data})}   backgroundColor="#3b5998" />
                 <Text > {this.isPresentInCartValue(id)}</Text>
                 <AntDesign.Button name="pluscircle" size={30}  onPress={() => this.onChangeQuantity({item__c:id, Data: data})} backgroundColor="#3b5998"/>
                 </View>
                 </Right>


                 </CardItem>




</Card>

<Card>
<CardItem>
                 <Left>
                   <Text style = {styles.size}>  SIZE </Text>
</Left>
</CardItem>
<CardItem>
<Text>   </Text>
<Button style={styles.buttons1}>
<Text style={styles.buttontext}> XS </Text>
</Button>
<Text>        </Text>
<Button style={styles.buttons1}>
<Text style={styles.buttontext}> S  </Text>
</Button>
<Text>           </Text>
<Button style={styles.buttons1}>
<Text style={styles.buttontext}> M </Text>
</Button>
<Text>            </Text>
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

const mapStateToProps = (state) => ({
    token                    : state.user.token,
    agentid                  : state.user.id,
    productList              : state.product.productList,
     cart 						: state.visits.cart,

});
const mapDispatchToProps = (dispatch) => ({

  addItemToCart:(params)                => dispatch(VisitsActions.addItemToCart(params)),
  removeItemFromCart:(params)           => dispatch(VisitsActions.removeItemFromCart(params))
});

export default connect(
mapStateToProps ,
 mapDispatchToProps
)
 (CardImageExample)

