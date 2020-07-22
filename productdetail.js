import React, { Component } from 'react';
import {
AppRegistry, Image, StyleSheet,
} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Title,  Button, Icon, Left, Body, Right } from 'native-base';
import styles from './productdetailstyle';
import AntDesign from "react-native-vector-icons/AntDesign";
export default class CardImageExample extends Component {
render() {
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


<Image source={require('./images/casdes.jpg')} style={{height: 350, width: 250, flex: 1}} />

    </CardItem>
   <CardItem>
                 <Left>
                   <Text  style={styles.heading1}> Solid Shirt Style Top </Text>
</Left>
                 </CardItem>
                 <CardItem>
                  <Left>
                                <Text style={styles.percut}>
                                <Text style={styles.percent}> (50% OFF)  </Text>
                              <Text style={styles.cutter}>  {'\u20B9'} 1099  </Text>

                 </Text>
                 </Left></CardItem>
                 <CardItem>
                 <Left>
                 <Button danger style={styles.button1}>
                 <Icon name='star' size={10}/>
                 <Text style={styles.btntxt}> 4.9 </Text>
                 </Button>
                 </Left>
                 </CardItem>
                <CardItem style={styles.card1}>

<Right>
<Text style={styles.plusminus}>
<AntDesign style={styles.plusminuscircle} name="minuscircle" size={30}/> 4  <AntDesign style={styles.plusminuscircle} name="pluscircle" size={30}/></Text>

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
<Text style={styles.short}>Short Sleeve </Text>
</Right>
</CardItem>

<CardItem>
<Left>
<Text style={styles.sleeve}> Fabric </Text>
</Left>
<Right>
<Text style={styles.short}>Polyester </Text>
</Right>
</CardItem>

<CardItem>
<Left>
<Text style={styles.sleeve}> Neck Type </Text>
</Left>
<Right>
<Text style={styles.short}>Round Neck </Text>
</Right>
</CardItem>

<CardItem>
<Left>
<Text style={styles.sleeve}> Pattern </Text>
</Left>
<Right>
<Text style={styles.short}>Solid </Text>
</Right>
</CardItem>
</Card>
    </Content>
  </Container>
);
}
}

