import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar, SafeAreaView} from 'react-native';
import store from './redux/store';
import Root from './screens';
import {navigationRef} from './utils/navigation';
import {Toast} from './components';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <Root ref={navigationRef} />
          <Toast />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
