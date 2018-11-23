import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { View, Text, Icon, Spinner } from 'native-base';
import { MenuProvider, Menu, MenuOption, MenuTrigger, MenuOptions } from 'react-native-popup-menu';
import { SCREEN_WIDTH, APP_TITLE_TEXT_COLOR } from '../../../config';

const styles = StyleSheet.create({
  textViewStyle: {
    backgroundColor: '#a5cfd5',
    flexGrow: 1,
    elevation: 1,
    padding: 10,
    maxWidth: SCREEN_WIDTH * 0.8,
    shadowColor: '#fff',
    borderRadius: 15,
    borderBottomRightRadius: 0,
  },
});

const statusView = (status) => {

  switch (status) {
    case 'loading':
      return (
        <Spinner size="small" color="#757575" style={{ width: 20, height: 20 }} />
      );
    case 'error':
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontStyle: 'italic', color: 'red', fontSize: 10 }}>
            Not sent
          </Text>
          <Icon name="close" style={{ fontSize: 15, color: 'red', marginLeft: 5 }} />
        </View>
      );
    case 'sent':
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontStyle: 'italic', color: APP_TITLE_TEXT_COLOR, fontSize: 10 }}>
          Sent
          </Text>
          <Icon name="done-all" style={{ fontSize: 15, color: APP_TITLE_TEXT_COLOR }} />
        </View>
      );
    default:
      return null;
  }
};

const messageTool = () => {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row', maxWidth: SCREEN_WIDTH * 0.8 }}>
      <View style={{ flexGrow: 1 }}>
        <Text style={{ fontSize: 10, color: '#757575', marginLeft: 10, maxWidth: SCREEN_WIDTH * 0.5 }}>
          Thus Nov 22 2018 Bhagya sah
        </Text>
      </View>
      <View style={{ marginRight: 30, flexDirection: 'row' }}>
        {statusView('sent')}
      </View>
    </View>
  );
};

class UserMessage extends Component {

  state = { openMenu: false }

  openMenuHandler = () => {
    const { openMenu } = this.state;
    this.setState({
      openMenu: !openMenu,
    });
  }

  render() {
    const { message } = this.props;
    const { openMenu } = this.state;
    return (
      <View style={{ alignItems: 'flex-end', margin: 5 }}>
        <View>
          <Menu opened={openMenu}>
            <MenuTrigger />
            <MenuOptions>
              <MenuOption onSelect={this.openMenuHandler} text='Save' />
              <MenuOption onSelect={() => Alert.alert(`Delete`)}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption onSelect={() => Alert.alert(`Not called`)} disabled={true} text='Disabled' />
            </MenuOptions>
          </Menu>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexGrow: 1 }}>
          <Text style={styles.textViewStyle}>
            { message }
          </Text>
          <Text
            style={{ alignSelf: 'flex-end', marginLeft: 5, fontSize: 20 }}
            onPress={this.openMenuHandler}
          >
          ...
          </Text>
        </View>
        {messageTool()}
      </View>
    );
  }
}
export default UserMessage;
