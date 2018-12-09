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
import SquarePhoto from '../../components/SquarePhoto';

const {width, height} = Dimensions.get ('window');

const SearchScreen = props => (
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
      {props.search.length === 0 && props.searchingBy.length > 0
        ? <Text style={styles.notFound}>
            No images Found for {props.searchingBy}
          </Text>
        : props.search.map (photo => (
            <SquarePhoto key={photo.id} imageURL={photo.file} id={photo.id} />
          ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
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

SearchScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  search: PropTypes.array.isRequired,
};

export default SearchScreen;
