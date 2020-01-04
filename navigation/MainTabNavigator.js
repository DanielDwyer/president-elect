import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Main/Home';
import InstructionsScreen from '../screens/Main/Instructions';
import PlayGameScreen from '../screens/Main/PlayGame';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// HOME
const HomeStack = createStackNavigator({ Links: HomeScreen }, config);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => ( 
    <TabBarIcon 
      focused={ focused }
      name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' }
      color={tintColor}
    />
  ),
  tabBarOptions: { 
    activeTintColor: '#10459f',
    inactiveTintColor: '#3c78df',
  }
};
HomeStack.path = '/';
// HOME

// INSTRUCTIONS
const InstructionsStack = createStackNavigator({ Links: InstructionsScreen }, config);
InstructionsStack.navigationOptions = {
  tabBarLabel: 'Instructions',
  tabBarIcon: ({ focused, tintColor }) => ( 
    <TabBarIcon 
      focused={ focused }
      name={ Platform.OS === 'ios' ? 'ios-book' : 'md-book' }
      color={tintColor}
    />
  ),
  tabBarOptions: { 
    activeTintColor: '#10459f',
    inactiveTintColor: '#3c78df',
  }
};
InstructionsStack.path = '/instructions';
// INSTRUCTIONS

// CREATE GAME
const PlayGameStack = createStackNavigator({ Links: PlayGameScreen }, config);
PlayGameStack.navigationOptions = {
  tabBarLabel: 'Play Game',
  tabBarIcon: ({ focused, tintColor }) => ( 
    <TabBarIcon 
      focused={ focused }
      name={ Platform.OS === 'ios' ? 'ios-create' : 'md-create' }
      color={tintColor}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#10459f',
    inactiveTintColor: '#3c78df',
  }
};
PlayGameStack.path = '/create-game';
// CREATE GAME

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  InstructionsStack,
  PlayGameStack,
});

tabNavigator.path = '/main';

export default tabNavigator;
