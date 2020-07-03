import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Right } from 'native-base'
import StarRating from 'react-native-star-rating'

export default  class RecommendedCardItem extends Component {
 constructor(props) {
        super(props);
        this.data = props.data;
    }


 render() {

    return(

             <CardItem>
                <View>


                <Image style={{ height: 95, width: 65 ,  }}
                                        source={this.data.url} />
                </View>


                <Right style={{ flex: 1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20 }}>
                                    <Text>{this.data.Name}</Text>
                                    <Text style={{ color: 'grey', fontSize: 11 }}>{this.data.Product_Group__c}</Text>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>{this.props.itemPrice}</Text>
                                                                           <View  style ={{flexDirection :'row',  }}>

                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' ,marginRight: '12%'}}><Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15 ,textDecorationLine: 'line-through',
                                                                                                         textDecorationStyle: 'solid'}}>
                                      {this.props.itemPriceActual}
                                    </Text> ({this.props.savings}%  OFF)  </Text>


                                     </View>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={this.props.rating}
                                        starSize={12}
                                        fullStarColor='orange'
                                        emptyStarColor='orange'

                                    />



                                </Right>
             </CardItem>


    )




 }



}