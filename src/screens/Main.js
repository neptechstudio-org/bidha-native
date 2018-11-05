import React from 'react';
import { AppLoading } from 'expo';
import { Container, Content, Header, Body, Left, Right, Icon, Text, Title, Button, Footer } from 'native-base';
import nativeBaseHandler from '../common/nativeBaseHander';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';

class Main extends React.Component {

  state = { renderMain: true };

  async componentWillMount() {
    await nativeBaseHandler();
    this.setState({ renderMain: false });
  }

  render() {
    const { renderMain } = this.state;
    const { navigation } = this.props;

    if (renderMain) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer('DrawerMenu')}>
              <Icon style={{ color: APP_TITLE_TEXT_COLOR }} name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: APP_TITLE_TEXT_COLOR }}>My astrology</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => navigation.openDrawer('DrawerMenu')}>
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
    );
  }
}

export default Main;
