import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import DrawerMenu from '../screens/drawers/menu/Menu';
import MenuContent from '../screens/drawers/menu/MenuDrawerContent';
import Main from '../screens/Main';

export default createDrawerNavigator({
  Main,
  DrawerMenu,
}, {
  contentComponent: props => <MenuContent {...props} />,
});
