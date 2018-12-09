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

const NotificationsScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={'black'}
      />
    }
  >
    <View style={styles.container}>
      {props.notifications.length === 0 > 0
        ? <Text style={styles.notFound}>
            No images Found for
          </Text>
        : props.notifications.map (notification => (
            <Notification key={notification.id} {...notification} />
          ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  notFound: {
    color: '#BBB',
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
    width,
  },
});

NotificationsScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  notifications: PropTypes.array.isRequired,
};

export default NotificationsScreen;
