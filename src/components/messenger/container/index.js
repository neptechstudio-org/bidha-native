import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuProvider } from 'react-native-popup-menu';
import { Content } from 'native-base';
import messageListHandler from './message';

class MessageContainer extends Component {

  state = {};

  render() {
    // console.log('Message list', this.props.messageList);
    const { messageList } = this.props;
    return (
      <Content style={{ backgroundColor: '#E0E0E0', flexGrow: 1 }}>
        <MenuProvider>
          {messageList.map((message, idx) => messageListHandler(message, idx))}
        </MenuProvider>
      </Content>
    );
  }
}

const mapStateToProps = ({ message }) => {
  return {
    messageList: message.messageList,
  };
};

MessageContainer.propTypes = {
  messageList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(MessageContainer);
