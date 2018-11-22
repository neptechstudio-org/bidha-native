import React from 'react';
import { View, Text } from 'native-base';
import { SCREEN_WIDTH } from '../../../config';

export default message => (
  <View style={{ alignItems: 'flex-end' }}>
    <Text style={{
      backgroundColor: '#a5cfd5',
      flexGrow: 1,
      elevation: 1,
      padding: 10,
      maxWidth: SCREEN_WIDTH * 0.8,
      margin: 5,
      shadowColor: '#fff',
      borderRadius: 15,
      borderBottomRightRadius: 0,
    }}
    >
      { message }
    </Text>
  </View>
);
