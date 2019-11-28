import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'
import Loading from '../screens/Loading'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator(
    {
      Profile: { screen: Profile },
      Settings: { screen: Settings}
    },
    {
      initialRouteName: 'Profile',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );

const SwitchNavigator = createSwitchNavigator(
    {
        Loading: {
            screen: Loading
        },
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Profile: {
            screen: Profile
        }
    },
    {
        initialRouteName: 'Loading'
    }
)

export default createAppContainer(createSwitchNavigator(
    {
    App: TabNavigator,
    Auth: SwitchNavigator
}))

