import React from 'react';
import {
  createMaterialBottomTabNavigator,
} from 'react-navigation-material-bottom-tabs';
import {View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import HomeRoute from '../routes/HomeRoute';
import SearchRoute from '../routes/SearchRoute';
import NotificationsRoute from '../routes/NotificationsRoute';
import ProfileRoute from '../routes/ProfileRoute';
import Icon from 'react-native-vector-icons/Ionicons';
import {Ionicons} from '@expo/vector-icons';

const TabsNavigation = createMaterialBottomTabNavigator (
  {
    Home: {
      screen: HomeRoute,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? 'ios-subway' : 'ios-subway'}
            size={30}
            color={'black'}
          />
        ),
        tabBarColor: '#FFB12F',
      },
    },
    Search: {
      screen: SearchRoute,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? 'ios-at' : 'ios-at'}
            size={30}
            color={'black'}
          />
        ),
        tabBarColor: '#8C4FA5',
      },
    },
    AddPhoto: {
      screen: () => {
        <View />;
      },
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? 'ios-add-circle' : 'ios-add-circle'}
            size={30}
            color={'black'}
          />
        ),
        tabBarOnPress: () => {
          navigation.navigate ('TakePhoto');
        },
      }),
    },
    Notification: {
      screen: NotificationsRoute,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? 'ios-hand' : 'ios-hand'}
            size={30}
            color={'black'}
          />
        ),
        tabBarColor: '#319D3B',
      },
    },
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        tabBarIcon: ({focused}) => (
          <Ionicons
            name={focused ? 'ios-person' : 'ios-person'}
            size={30}
            color={'black'}
          />
        ),
        tabBarColor: '#C65C17',
      },
    },
  },
  {
    labeled: false,
    activeColor: '#FFB12F',
  }
);

export default TabsNavigation;
