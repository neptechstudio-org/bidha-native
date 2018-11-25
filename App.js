import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import RootRounter from './src/routers';
import Main from './src/screens';
import store from './src/store';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <Provider store={store}>
        <View style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
          <RootRounter />
        </View>
      </Provider>
    );
  }
}
