import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'native-base';
import touchableElement from './touchableElement';
import staticElement from './staticElement';
import separatorElement from './separatorElement';
import * as actions from '../../../../actions';

const contentElement = (content, idx, toggleMenu) => {
  switch (content.element) {
    case 'static':
      return staticElement(content, idx);
    case 'touchable':
      return touchableElement(content, idx, toggleMenu);
    case 'separator':
      return separatorElement(content, idx);
    default:
      return null;
  }
};

const DrawerContent = (props) =>  {
  // console.log('state in Drawercontent', props.toggleMenu);
  const { contents, toggleMenu } = props;
  return (
    <View>
      {contents.map((content, idx) => contentElement(content, idx, toggleMenu))}
    </View>
  );
};

DrawerContent.defaultProps = {
  contents: [],
};

DrawerContent.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.any),
  toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = ({ drawer }) =>  {
  return drawer;
};

export default connect(mapStateToProps, { ...actions })(DrawerContent);
