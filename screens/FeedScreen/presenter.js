import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ScrollView, RefreshControl, StyleSheet} from 'react-native';
import Photo from '../../components/Photo';

const FeedScreen = props => (
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
      {props.feed &&
        props.feed.map (photo => <Photo {...photo} key={photo.id} />)}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});

FeedScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  feed: PropTypes.array,
};

export default FeedScreen;
