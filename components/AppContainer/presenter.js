import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
  };
  componentDidMount () {
    const {isLoggedIn, initApp} = this.props;
    if (isLoggedIn) {
      initApp ();
    }
  }

  render () {
    const {isLoggedIn, profile} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          hidden={false}
          backgroundColor="transparent"
          barStyle="light-content"
        />
        {isLoggedIn && profile
          ? <RootNavigation screenProps={{username: profile.username}} />
          : <LoggedOutNavigation />}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default AppContainer;
