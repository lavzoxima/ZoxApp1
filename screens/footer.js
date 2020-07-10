import React, { Component } from "react";
import * as NavigationService from 'ZoxApp1/service/util/NavigationService'

import { Button, Text, Icon, Footer, FooterTab } from "native-base";
class   FooterScreen extends Component{

        render(){
      return (
        <Footer>
          <FooterTab>
            <Button

               vertical
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
      );

}
}

export default  FooterScreen;
