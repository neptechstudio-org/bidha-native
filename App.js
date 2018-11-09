import React from 'react';
import { StatusBar, View } from 'react-native';
import RootRounter from './src/routers';
import Main from './src/screens';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
        <RootRounter />
      </View>
    );
  }
}
