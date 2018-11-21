import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Content, List, ListItem, Right, Thumbnail } from 'native-base';
import { SCREEN_WIDTH } from '../../config';

class MessageContainer extends Component {

  state = {};

  messageListHandler = (message, idx) => {
    return (
      <View
        key={message}
        style={{
          maxWidth: SCREEN_WIDTH,
          alignItems: idx % 2 === 0 ? 'flex-end' : 'flex-start',
        }}
      >
        <Thumbnail
          small
          source={{ uri: 'https://www.cyberastro.com/grfx/talk-to-astrologer.jpg' }}
          style={{ marginLeft: 5, marginRight: 5, marginTop: idx !== 0 ? -30 : 5 }}

        />
        <Text style={{
          backgroundColor: idx % 2 === 0 ? '#a5cfd5' : '#FFFFFF9F',
          flexGrow: 1,
          elevation: 1,
          padding: 10,
          maxWidth: SCREEN_WIDTH * 0.8,
          margin: 5,
          shadowColor: '#fff',
          borderTopRightRadius: idx % 2 === 0 ? 0 : 25,
          borderBottomRightRadius: idx % 2 === 0 ? 0 : 25,
          borderTopLeftRadius: idx % 2 === 0 ? 25 : 0,
          borderBottomLeftRadius: idx % 2 === 0 ? 25 : 0,
        }}
        >
          { message }
        </Text>
      </View>
    );
  }

  render() {
    // console.log('Message list', this.props.messageList);
    const { messageList } = this.props;
    return (
      <Content style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
        {messageList.map((message, idx) => this.messageListHandler(message, idx))}
      </Content>
    );
  }
}

const mapStateToProps = ({ message }) => {
  return {
    messageList: message.messageList,
  };
};

export default connect(mapStateToProps)(MessageContainer);
