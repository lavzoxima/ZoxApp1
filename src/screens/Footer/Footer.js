import React, {Component} from 'react';
import {Button, Text, Icon, Footer, FooterTab, Container} from 'native-base';
import * as NavigationService from '../../utils/navigation';





class FooterScreen extends Component {



  render() {




    return (

        <Footer  style ={{ }}>
          <FooterTab  style ={{ backgroundColor: '#fff'}}>
            <Button


              onPress={() => NavigationService.navigate('CasualWearScreen')}>
              <Icon name="home"  style={{color:'#a9a9a9', fontWeight: 'bold'}} />
              <Text style={{color:'#a9a9a9', fontWeight: 'bold'}}>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => NavigationService.navigate('ListExample')}>
              <Icon name="cart"  style={{color:'#a9a9a9'}}/>
              <Text style={{color:'#a9a9a9', fontWeight: 'bold'}}>Cart</Text>

            </Button>
            <Button
                            vertical
                          onPress={() => NavigationService.navigate('ProfileScreen')}>
                          <Icon name="person" style={{color:'#a9a9a9'}}/>
                          <Text style={{color:'#a9a9a9', fontWeight: 'bold'}}>Profile</Text>
                        </Button>
          </FooterTab>
        </Footer>

    );
  }
}

export default FooterScreen;


