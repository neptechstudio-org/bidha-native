import React, { Component } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { AppLoading } from 'expo';
import {
  Container, Header, Body, Title, Left, Icon, Text,
} from 'native-base';
import nativeBaseHandler from '../../../common/nativeBaseHander';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../../../config';

class MenuContent extends Component {

  state={ renderMenu: true };

  async componentWillMount() {
    await nativeBaseHandler();
    this.setState({ renderMenu: false });
  }

  render() {
    const { renderMenu } = this.state;
    if (renderMenu) {
      return <AppLoading />;
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Header style={{backgroundColor: APP_COLOR}}>
            <Left>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="arrow-back" onPress={() => this.props.navigation.closeDrawer()} />
            </Left>
            <Body>
              <Title>
                <Text style={{ color: APP_TITLE_TEXT_COLOR, fontSize: 20 }}>Menu</Text>
              </Title>
            </Body>
          </Header>
        </Container>
        {/* <DrawerItems {...this.props} /> */}
      </SafeAreaView>
    );
  }
}

export default MenuContent;
