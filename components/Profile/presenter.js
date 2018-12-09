import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Photo from '../../components/Photo';
import Notification from '../../components/Notification';

const {width, height} = Dimensions.get ('window');

const Profile = props => (
  <ScrollView
    refreshControl={
      <RefreshControl refreshing={props.isFetching} onRefresh={props.refresh} />
    }
  >
    <View style={styles.container}>
      <Text>Propfoile</Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

Profile.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  refresh: PropTypes.func.isRequired,
  profileObject: PropTypes.shape ({
    bio: PropTypes.string.isRequired,
    followers_count: PropTypes.number.isRequired,
    following_count: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    is_self: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf (
      PropTypes.shape ({
        file: PropTypes.string.isRequired,
        comment_count: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
    name: PropTypes.string,
    post_count: PropTypes.number.isRequired,
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }),
};

export default Profile;
