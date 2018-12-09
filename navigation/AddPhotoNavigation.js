import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import CameraScreen from '../screens/CameraScreen';
import LibraryScreen from '../screens/LibraryScreen';
//import {Ionicons} from '@expo/vector-icons';

const AddPhotoNavigation = createBottomTabNavigator (
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarLabel: 'Photo',
      },
    },
    LibraryScreen: {
      screen: LibraryScreen,
      navigationOptions: {
        tabBarLabel: 'Library',
      },
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#FAFAFA',
        alighItems: 'center',
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: '600',
      },
      showIcon: false,
    },
  }
);

export default AddPhotoNavigation;
