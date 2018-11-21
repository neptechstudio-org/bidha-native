import React, { Component } from 'react';
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Icon } from 'native-base';
import { APP_TITLE_TEXT_COLOR, SCREEN_WIDTH } from '../../config';
import * as actions from '../../actions';

class MessageSender extends Component {

  state = {};

  render() {
    const { message, changeMessageHandler, sendMessageHandler } = this.props;
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        padding: 5,
      }}
      >
        <View style={{
          backgroundColor: '#fff',
          maxWidth: SCREEN_WIDTH * 0.9,
          maxHeight: 300,
          flexGrow: 1,
          borderRadius: 25,
          padding: 3,
        }}
        >

          <TextInput
            placeholder="Type your question here..."
            multiline
            value={message}
            numberOfLines={2}
            onChangeText={changeMessageHandler}
            spellCheck
            style={styles.textInputStyle}
          />
        </View>
        <View style={{ maxWidth: 50 }}>
          <TouchableOpacity onPress={() => sendMessageHandler(message)}>
            <Icon name="send" style={{ color: APP_TITLE_TEXT_COLOR }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    maxHeight: 100,
    borderColor: '#757575',
    flexGrow: 1,
    padding: 2,
  },
});

MessageSender.propTypes =  {
  message: PropTypes.string.isRequired,
  changeMessageHandler: PropTypes.func.isRequired,
};

const mapStateToProps = ({ message }) => message;


export default connect(mapStateToProps, { ...actions })(MessageSender);
