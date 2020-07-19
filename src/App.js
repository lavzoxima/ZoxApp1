import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, SafeAreaView} from 'react-native';
import store from './redux/store';
import Root from './screens';
import {navigationRef} from './utils/navigation';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <Root ref={navigationRef} />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
