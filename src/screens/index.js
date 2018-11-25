import React from 'react';
import { AppLoading } from 'expo';
import PropTypes from 'prop-types';
import { Header, Body, Left, Right, Icon, Title, Button, View,  } from 'native-base';
import { connect } from 'react-redux';
import nativeBaseHandler from '../common/nativeBaseHander';
import { APP_COLOR, APP_TITLE_TEXT_COLOR } from '../config';
import * as actions from '../actions';
import Messenger from '../components/messenger';

//  Drawer.defaultProps.styles.mainOverlay.elevation = 0;

class index extends React.Component {

  state = { renderMain: true };

  async componentWillMount() {
    const { fetchInitialAppData } = this.props;
    await nativeBaseHandler();
    fetchInitialAppData();
    this.setState({ renderMain: false });
  }

  render() {
    const { renderMain } = this.state;
    const { navigation } = this.props;
    // console.log(this.props.astrologers);

    if (renderMain) {
      return <AppLoading />;
    }

    return (
      <View style={{ flexGrow: 1 }}>
        <Header style={{ backgroundColor: APP_COLOR }}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
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
        <Messenger />
      </View>
    );
  }
}

index.defaultProps = {
  navigation: {},
};

index.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(index);
