import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import DrawerMenu from '../screens/drawers/menu/Menu';
import MenuContent from '../screens/drawers/menu/MenuDrawerContent';
import Main from '../screens/index';
import screenMapping from '../screens/drawers/menu/screenMaping';
import MainDrawer from '../screens/drawers/menu/MainDrawer';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default createDrawerNavigator({
  Home: {
    screen: Main,
  },
  ...screenMapping,
}, {
  drawerWidth: SCREEN_WIDTH * 0.8,
  contentComponent: MainDrawer,
});
