import React, {Component} from 'react';
import {Button, Text, Icon, Footer, FooterTab, Container} from 'native-base';
import * as NavigationService from '../../utils/navigation';

class FooterScreen extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active
              onPress={() => NavigationService.navigate('CasualWearScreen')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              onPress={() => NavigationService.navigate('ListExample')}>
              <Icon name="cart" />
              <Text>Cart</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FooterScreen;
