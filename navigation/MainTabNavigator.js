import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Main/Home';
import InstructionsScreen from '../screens/Main/Instructions';
import CreateGameScreen from '../screens/Main/CreateGame';
// import StartGameScreen from '../screens/Main/StartGame';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// HOME
const HomeStack = createStackNavigator({
    Links: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-home' : 'md-home'
    }
    />
  ),
};

HomeStack.path = '/';
// HOME

// INSTRUCTIONS
const InstructionsStack = createStackNavigator({
    Links: InstructionsScreen,
  },
  config
);

InstructionsStack.navigationOptions = {
  tabBarLabel: 'Instructions',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-book' : 'md-book'
    }
    />
  ),
};

InstructionsStack.path = '/instructions';
// INSTRUCTIONS

// CREATE GAME
const CreateGameStack = createStackNavigator({
    Links: CreateGameScreen,
  },
  config
);

CreateGameStack.navigationOptions = {
  tabBarLabel: 'Create Game',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-create' : 'md-create'
    }
    />
  ),
};

CreateGameStack.path = '/create-game';
// CREATE GAME

/*
// START GAME
const StartGameStack = createStackNavigator({
  Links: StartGameScreen,
},
  config
);

StartGameStack.navigationOptions = {
  tabBarLabel: 'Start Game',
  tabBarIcon: ({
    focused
  }) => (<
    TabBarIcon focused={
      focused
    }
    name={
      Platform.OS === 'ios' ? 'ios-link' : 'md-link'
    }
  />
    ),
};

StartGameStack.path = '/create-game';
// START GAME
*/

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  InstructionsStack,
  CreateGameStack,
  // StartGameStack,
});

tabNavigator.path = '/main';

export default tabNavigator;
