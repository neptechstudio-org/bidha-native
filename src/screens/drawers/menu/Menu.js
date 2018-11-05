import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Menu extends React.Component {

  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Text> Menu Screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
