import React from 'react';
import Expo from 'expo';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get ('window');

const LoginScreen = props => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.header}>
      <Image
        source={require ('../../assets/images/logo.png')}
        resizeMode="stretch"
        style={styles.logo}
      />
    </View>
    <View style={styles.content}>
      <KeyboardAvoidingView behavior={height} enabled={false}>
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={props.changeUsername}
        />

        <TextInput
          placeholder="Password"
          style={styles.textInput}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={props.changePassword}
          returnKeyType={'send'}
          onSubmitEditing={props.submit}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.touchable} onPressOut={props.submit}>
        <View style={styles.button}>
          {props.isSubmitting
            ? <ActivityIndicator size="small" color="white" />
            : <Text style={styles.btnText}>
                Login
              </Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer} onPressOut={props.fbLogin}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}>
            Login with Facebook
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

LoginScreen.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeUsername: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  fbLogin: PropTypes.func.isRequired,
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //paddingTop: Expo.Constants.statusBarHeight,
  },
  header: {
    flex: 1,
    backgroundColor: '#FFB12F',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
  logo: {width: 150, height: 50},
  content: {
    flex: 4,
    backgroundColor: 'white',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fbContainer: {marginTop: 50},
  fbView: {flexDirection: 'row', alignItems: 'center'},
  fbText: {
    color: '#3E99EE',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 14,
  },
  textInput: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#bbb',
    width: width - 80,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
  },
  touchable: {
    borderRadius: 3,
    backgroundColor: '#FFB12F',
    width: width - 80,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  btnText: {fontWeight: '600', textAlign: 'center', fontSize: 14},
});

export default LoginScreen;
