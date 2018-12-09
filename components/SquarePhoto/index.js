import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import FadeIn from 'react-native-fade-in-image';
import FitImage from 'react-native-fit-image';
const {width, height} = Dimensions.get ('window');

const SquarePhoto = props => (
  <TouchableOpacity onPressOut={() => props.navigation.navigate ('Photo')}>
    <FitImage source={{uri: props.imageURL}} style={styles.image} />
  </TouchableOpacity>
);

SquarePhoto.propTypes = {
  imageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const styles = StyleSheet.create ({
  image: {
    height: width / 3,
    width: width / 3,
  },
});

export default withNavigation (SquarePhoto);
