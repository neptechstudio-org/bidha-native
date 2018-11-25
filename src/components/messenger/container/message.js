import React from 'react';
import { View } from 'native-base';
import { SCREEN_WIDTH } from '../../../config';
import AstrologerMessage from './astrologerMessage';
import UserMessage from './userMessage';

export default (message, idx) => {
  const astrologer = idx % 2 !== 0;
  return (
    <View
      key={message}
      style={{
        maxWidth: SCREEN_WIDTH,
      }}
    >
      { astrologer ? <AstrologerMessage message={message} /> : <UserMessage message={message} /> }
    </View>
  );
};
