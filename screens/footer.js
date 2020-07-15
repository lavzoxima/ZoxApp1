import React, { Component } from "react";
import * as NavigationService from 'ZoxApp1/service/util/NavigationService'
import CasualWearScreen from 'ZoxApp1/screens/casualWear'
import { TabNavigator } from "react-navigation";

import { Button, Text, Icon, Footer, FooterTab, Container } from "native-base";
class   FooterScreen extends Component{

        render(){


      return (
      <Container>
        <Footer >
          <FooterTab>
            <Button

               vertical
               active

              onPress={() => NavigationService.navigate('CasualWearScreen')}>
              <Icon  name="home" />
              <Text >Home</Text>
            </Button>
            <Button

               vertical
              onPress={() =>NavigationService.navigate('ListExample') }>
             <Icon  name="cart" />
              <Text >Cart</Text>
            </Button>

          </FooterTab>
        </Footer>
        </Container>
      );

}
}

export default  FooterScreen;
