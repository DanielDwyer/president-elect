import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import GameTabNavigator from './GameTabNavigator';

const switchNavigator = createSwitchNavigator({
    Main: MainTabNavigator,
    Game: GameTabNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
