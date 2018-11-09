import React from 'react';
import { AppLoading } from 'expo';
import { Container, Content, Header, Body, Left, Right, Icon, Text, Title, Button, Footer, Drawer, View } from 'native-base';
import nativeBaseHandler from '../common/nativeBaseHander';
import BirthdayProfile from './modals/BirthdayProfile';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';
import MenuDrawer from './drawers/menu/MenuDrawerContent';

Drawer.defaultProps.styles.mainOverlay.elevation = 0;

class index extends React.Component {

  state = { renderMain: true, openDrawer: false, menuDrawer: false };

  async componentWillMount() {
    await nativeBaseHandler();
    this.setState({ renderMain: false });
  }

  openDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer });
    // this.drawer._root.open();
  }

  closeDrawer = () => {
    this.drawer._root.close();
  }

  render() {
    const { renderMain } = this.state;
    const { navigation } = this.props;

    if (renderMain) {
      return <AppLoading />;
    }

    openMenuDrawer = () => {
      this.setState({ menuDrawer: !this.state.menuDrawer})
    }

    return (
      <Drawer
        side="bottom"
        style={{ backgroundColor: 'red' }}
        openDrawerOffset={0.05}
        open={this.state.openDrawer}
        ref={ref => {this.drawer = ref}}
        content={<BirthdayProfile />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header style={{ backgroundColor: APP_COLOR }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
              </Button>
            </Left>
            <Body>
              <Title style={{ color: APP_TITLE_TEXT_COLOR }}>My astrology</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.openDrawer}>
                <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="person" />
              </Button>
            </Right>
          </Header>
          <Content>

            <Text>
              Main screen
            </Text>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

export default index;
