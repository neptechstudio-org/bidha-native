import React from 'react';
import { View, Text, Thumbnail } from 'native-base';
import { SCREEN_WIDTH } from '../../../config';

export default message => (
  <View style={{ alignItems: 'flex-start' }}>
    <Thumbnail
      small
      source={{ uri: 'https://www.cyberastro.com/grfx/talk-to-astrologer.jpg' }}
      style={{ marginLeft: 5, marginRight: 5, marginTop: 5 }}
    />
    <Text style={{
      backgroundColor: '#FFFFFF9F',
      flexGrow: 1,
      elevation: 1,
      padding: 10,
      maxWidth: SCREEN_WIDTH * 0.8,
      margin: 5,
      shadowColor: '#fff',
      borderRadius: 15,
      borderTopLeftRadius: 0,
    }}
    >
      { message }
    </Text>
  </View>
);
