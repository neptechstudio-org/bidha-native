import React from 'react';
import { View } from 'native-base';
import { SCREEN_WIDTH } from '../../../config';
import astrologerMessage from './astrologerMessage';
import userMessage from './userMessage';

export default (message, idx) => {
  const astrologer = idx % 2 !== 0;
  return (
    <View
      key={message}
      style={{
        maxWidth: SCREEN_WIDTH,
      }}
    >
      { astrologer ? astrologerMessage(message) : userMessage(message) }
    </View>
  );
};
