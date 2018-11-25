import React, { Component } from 'react';
import { View } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';
import MessageSender from './sender';
import MessageContainer from './container';

class index extends Component {

  state = {};

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior="padding"
      >
        <View style={{ flexGrow: 1, justifyContent: 'space-between' }}>
          <View style={{ flexGrow: 1 }}>
            <MessageContainer />
          </View>
          <View style={{ justifyContent: 'flex-end' }}>
            <MessageSender />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default index;
