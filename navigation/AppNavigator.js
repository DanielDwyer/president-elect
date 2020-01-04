import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import GameTabNavigator from './GameTabNavigator';

// Read more at https://reactnavigation.org/docs/en/auth-flow.html
export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
    Game: GameTabNavigator,
  }, {
    initialRouteName: 'Main',
  })
);
