import React, { Component } from 'react';
import { View, Text } from 'native-base';

class MessageContainer extends Component {

  state = {};

  render() {
    return (
      <View style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
        <Text>list goes here</Text>
      </View>
    );
  }
}

export default MessageContainer;
