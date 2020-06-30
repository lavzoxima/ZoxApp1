import React, {Component} from 'react';
import { View, Text, Button, StyleSheet,TextInput , TouchableOpacity, Image,ScrollView } from 'react-native';
import { Container,Card, CardItem, Right } from 'native-base'
import {connect} from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker'
import SignUpCardItem from  'ZoxApp1/components/SignUpCardItem'
import LocationSettings from  'ZoxApp1/components/locationSettings'


class SignUpDetail extends Component {

 state = {
    photo: null,
  };

handleChoosePhoto =() =>{
const options={
NoData : true

}
ImagePicker.launchImageLibrary(
options, response=>{
console.log("response", response );

if(response.uri)
{
this.setState({photo:response});

}

}

);


}



 render(){

    const { photo } =this.state;
return (
      <ScrollView  style={{backgroundColor: '#f5f5f5',flex:1}}>


            <View style={{}}>
      <Image
        source={require('ZoxApp1/assests/img5.png')}
        style={{width:'30%', height:'40%', borderRadius:100, marginLeft:'12%', marginTop:'17.5%', borderColor :'#d3d3d3', borderWidth : 2,backgroundColor:'#d3d3d3'}}/>

        </View>


         <TouchableOpacity
            onPress={this.handleChoosePhoto}

           style={ [styles.signIn,
            {
             borderColor :'#d3d3d3',
             borderWidth : 1,
             marginTop:'-20%'}]

             }>

  <Text style={[styles.textSign,{ color:'#a9a9a9', fontSize:15, fontWeight:'bold'}]}> SET PROFILE PHOTO </Text>

           </TouchableOpacity>


         <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10%', borderRadius:10  }}>


         <SignUpCardItem

                            logo="user-circle"
                            title ="USERNAME"
                            example= "EX- LAV AGRAWAL"
                        />

        </Card>
          <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                <SignUpCardItem

                    logo="envelope-open-o"
                    title ="EMAIL"
                    example= "EX- Lav.ktm@gmail.com"
                />

            </Card>
             <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                            <SignUpCardItem

                                logo="mobile-phone"
                                title ="PHONE NUMBER"
                                example= "Enter your Phone Number"
                            />

                        </Card>

            <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                                        <SignUpCardItem

                                            logo="user-o"
                                            title ="GENDER"
                                            example= "MALE OR FEMALE"
                                        />

                                    </Card>
            <Card style={{ marginLeft: '5%', marginRight: '5%', marginTop: '7%',  }}>

                <LocationSettings

                                                            logo="location-arrow"
                                                            title ="LOCATION SETTINGS"

                                                        />
             </Card>



      </ScrollView >
    );
};
};




export default  SignUpDetail;


const styles = StyleSheet.create({
   container: {
     flex: 1,
     borderRadius: 10,

     backgroundColor: '#f5f5f5',
   },
    signIn: {

           height: 35,
           width:'55%',
           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: 30,
           marginRight:'5%',
           marginLeft:'5%',
           backgroundColor:'#f5f5f5'

       },
       textInput: {

                 fontSize:20,
               paddingLeft: 10,

           },
 });
