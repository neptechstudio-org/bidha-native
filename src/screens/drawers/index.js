import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import Primary from './Primary';
import Secondary from './Secondary';
import nativeBaseHandler from '../../common/nativeBaseHander';
import * as actions from '../../actions';

class index extends Component {

  state={ renderMenu: true };

  async componentWillMount() {
    await nativeBaseHandler();
    this.setState({ renderMenu: false });
  }

  render() {
    const { renderMenu } = this.state;
    const { title } = this.props;

    if (renderMenu) {
      return <AppLoading />;
    }
    // console.log('Nav options', navigation);


    if (title === 'Menu') {
      return (
        <Primary headerTitle={title} {...this.props} />
      );
    }
    return (
      <Secondary headerTitle={title} {...this.props} />
    );
  }
}

const mapStateToProps = ({ drawer }) => drawer;

export default connect(mapStateToProps, { ...actions })(index);
