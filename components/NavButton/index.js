import React from 'react';
import PropTypes from 'prop-types';
import {TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavButton = props => (
  <TouchableWithoutFeedback onPressOut={props.onPress}>
    <View style={styles.container}>
      <Icon name={props.iconName} color={'black'} size={30} />
    </View>
  </TouchableWithoutFeedback>
);

NavButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};

const styles = StyleSheet.create ({
  container: {
    paddingHorizontal: 10,
  },
});

export default NavButton;
