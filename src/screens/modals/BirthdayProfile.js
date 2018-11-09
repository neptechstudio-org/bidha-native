import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { red } from 'ansi-colors';

class BirthdayProfile extends Component {

state = {};

render() {
  return (
    <View style={{ backgroundColor: "#f00", flex: 1}}>
      <Text>this is test for birthday profile</Text>
    </View>
  );
}
}

export default BirthdayProfile;
