import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import MainMenu from '../screens/drawers';
import Main from '../screens/index';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default createDrawerNavigator({
  Home: {
    screen: Main,
  },
}, {
  drawerWidth: SCREEN_WIDTH * 0.9,
  contentComponent: MainMenu,
});
