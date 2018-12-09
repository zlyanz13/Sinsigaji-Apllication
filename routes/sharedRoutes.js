import React from 'react';
import LikesScreen from '../screens/LikesScreen';
import CommentsScreen from '../screens/CommentsScreen';
import NavButton from '../components/NavButton';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import PhotoScreen from '../screens/PhotoScreen';

const sharedRoutes = {
  Likes: {
    screen: LikesScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={'ios-arrow-back'} {...props} />,
      headerTitle: 'Likes',
    },
  },
  Comments: {
    screen: CommentsScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={'ios-arrow-back'} {...props} />,
      headerTitle: 'Comments',
    },
  },
  ProfileDetail: {
    screen: ProfileDetailScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={'ios-arrow-back'} {...props} />,
    },
  },
  Photo: {
    screen: PhotoScreen,
    navigationOptions: {
      headerLeft: props => <NavButton iconName={'ios-arrow-back'} {...props} />,
      headerTitle: 'Photo',
    },
  },
};

const sharedOptions = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#FFB12F',
      height: 30,
      textAlign: 'center',
      paddingBottom: 25,
    },
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  headerLayoutPreset: 'center',
  //headerTransitionPreset: 'uikit',
  headerMode: 'float',
  mode: 'card',
};

export {sharedOptions};

export default sharedRoutes;
