import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import GameDashboard from '../screens/Game/GameDashboard';
import PlayerDashboard from '../screens/Game/PlayerDashboard';
import Play from '../screens/Game/Play';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// GAME DASHBOARD
const GameDashboardStack = createStackNavigator({  Links: GameDashboard }, config);
GameDashboardStack.navigationOptions = {
  tabBarLabel: 'Game Dashboard',
  tabBarIcon: ({ focused }) => ( 
    <TabBarIcon 
      focused = { focused }
      name = { Platform.OS === 'ios' ? 'ios-cube' : 'md-cube' }
    />
  ),
};
GameDashboardStack.path = '/dashboard';
// GAME DASHBOARD

// PLAYER DASHBOARD
const PlayerDashboardStack = createStackNavigator({ Links: PlayerDashboard }, config);
PlayerDashboardStack.navigationOptions = {
  tabBarLabel: 'Player Dashboard',
  tabBarIcon: ({ focused }) => ( 
    <TabBarIcon 
      focused = { focused }
      name = { Platform.OS === 'ios' ? 'ios-person' : 'md-person' }
    />
  ),
};
PlayerDashboardStack.path = '/dashboard';
// PLAYER DASHBOARD

// PLAY A
const PlayStack = createStackNavigator({ Links: Play }, config);
PlayStack.navigationOptions = {
  tabBarLabel: 'Play',
  tabBarIcon: ({ focused }) => ( 
    <TabBarIcon 
      focused = { focused }
      name = { Platform.OS === 'ios' ? 'ios-play' : 'md-play' }
    />
  ),
};
PlayStack.path = '/play-a';
// PLAY A


const tabNavigator = createBottomTabNavigator({
  GameDashboardStack,
  PlayerDashboardStack,
  PlayStack,
});

tabNavigator.path = '/game';

export default tabNavigator;
