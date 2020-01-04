import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import GameDashboard from '../screens/Game/GameDashboard';
import PlayerDashboard from '../screens/Game/PlayerDashboard';
import PlayA from '../screens/Game/PlayA';
// import PlayB from '../screens/Game/PlayB';
// import PlayC from '../screens/Game/PlayC';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// GAME DASHBOARD
const GameDashboardStack = createStackNavigator({
    Links: GameDashboard,
  },
  config
);

GameDashboardStack.navigationOptions = {
  tabBarLabel: 'Game Dashboard',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-cube' : 'md-cube'
    }
    />
  ),
};

GameDashboardStack.path = '/dashboard';
// GAME DASHBOARD

// PLAYER DASHBOARD
const PlayerDashboardStack = createStackNavigator({
    Links: PlayerDashboard,
  },
  config
);

PlayerDashboardStack.navigationOptions = {
  tabBarLabel: 'Player Dashboard',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-person' : 'md-person'
    }
    />
  ),
};

PlayerDashboardStack.path = '/dashboard';
// PLAYER DASHBOARD

// PLAY A
const PlayAStack = createStackNavigator({
    Links: PlayA,
  },
  config
);

PlayAStack.navigationOptions = {
  tabBarLabel: 'Play A',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-play' : 'md-play'
    }
    />
  ),
};

PlayAStack.path = '/play-a';
// PLAY A

/*
// PLAY B
const PlayBStack = createStackNavigator({
    Links: PlayB,
  },
  config
);

PlayBStack.navigationOptions = {
  tabBarLabel: 'Play B',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-link' : 'md-link'
    }
    />
  ),
};

PlayBStack.path = '/play-a';
// PLAY B

// PLAY C
const PlayCStack = createStackNavigator({
    Links: PlayC,
  },
  config
);

PlayCStack.navigationOptions = {
  tabBarLabel: 'Play C',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? 'ios-link' : 'md-link'
    }
    />
  ),
};

PlayCStack.path = '/play-a';
// PLAY C
*/


const tabNavigator = createBottomTabNavigator({
  GameDashboardStack,
  PlayerDashboardStack,
  PlayAStack,
  // PlayBStack,
  // PlayCStack,
});

tabNavigator.path = '/game';

export default tabNavigator;
