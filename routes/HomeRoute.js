import React from 'react';
import {createStackNavigator} from 'react-navigation';
import FeedScreen from '../screens/FeedScreen';
import sharedRoutes, {sharedOptions} from './sharedRoutes';
import NavButton from '../components/NavButton';
import {Image} from 'react-native';

const HomeRoute = createStackNavigator (
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({navigation}) => ({
        headerTitle: (
          <Image
            source={require ('../assets/images/logo.png')}
            style={{height: 30, width: 100}}
            resizeMode={'contain'}
          />
        ),
        headerLeft: (
          <NavButton
            iconName={'ios-camera'}
            onPress={() => navigation.navigate ('TakePhoto')}
          />
        ),
      }),
    },
    ...sharedRoutes,
  },
  {
    ...sharedOptions,
  }
);

export default HomeRoute;
