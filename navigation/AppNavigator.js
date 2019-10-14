import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from '../screens/SearchScreen';
import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Search: {screen: SearchScreen},
});

export default createAppContainer(
  MainNavigator
);
