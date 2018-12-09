import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  CameraRoll,
} from 'react-native';
import {Camera, Permissions} from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FitImage from 'react-native-fit-image';

class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    hasDiskPermission: null,
    type: Camera.Constants.Type.back,
    flash: Camera.Constants.FlashMode.off,
    pictureTaken: false,
    picture: null,
  };
  componentWillMount = async () => {
    const camera = await Permissions.askAsync (Permissions.CAMERA);
    const storage = await Permissions.askAsync (Permissions.CAMERA_ROLL);
    this.setState ({
      hasCameraPermission: camera.status === 'granted',
      hasDiskPermission: storage.status === 'granted',
    });
  };
  render () {
    const {
      hasCameraPermission,
      hasDiskPermission,
      type,
      flash,
      pictureTaken,
      picture,
    } = this.state;
    if (hasCameraPermission === null || hasDiskPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No Access to Camera, Check your Setting</Text>;
    } else if (hasDiskPermission === false) {
      return <Text>No Access to Storage, Check your Setting</Text>;
    } else {
      return (
        <View style={styles.container}>
          {pictureTaken
            ? <View style={{flex: 2}}>
                <FitImage source={{uri: picture}} style={{flex: 1}} />
              </View>
            : <Camera
                type={type}
                flashMode={flash}
                ref={camera => (this.camera = camera)}
                style={styles.camera}
              >
                <TouchableOpacity onPressOut={this._changType}>
                  <View style={styles.action}>
                    <Icon
                      name={
                        type === Camera.Constants.Type.back
                          ? 'camera-front'
                          : 'camera-rear'
                      }
                      color={'white'}
                      size={40}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={this._changFlash}>
                  <View style={styles.action}>
                    {flash === Camera.Constants.FlashMode.off &&
                      <Icon name={'flash-off'} color={'white'} size={40} />}
                    {flash === Camera.Constants.FlashMode.on &&
                      <Icon name={'flash-on'} color={'white'} size={40} />}
                    {flash === Camera.Constants.FlashMode.auto &&
                      <Icon name={'flash-auto'} color={'white'} size={40} />}
                  </View>
                </TouchableOpacity>
              </Camera>}
          <View style={styles.btnContainer}>
            <TouchableOpacity onPressOut={this._takePhoto}>
              {pictureTaken
                ? <View style={styles.photoActions}>
                    <TouchableOpacity onPress={this._rejectPhoto}>
                      <Icon name={'cancel'} size={60} color={'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._approvePhoto}>
                      <Icon name={'check-circle'} size={60} color={'black'} />
                    </TouchableOpacity>
                  </View>
                : <View style={styles.btn} />}
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  _changType = () => {
    this.setState (prevState => {
      if (prevState.type === Camera.Constants.Type.back) {
        return {type: Camera.Constants.Type.front};
      } else {
        return {type: Camera.Constants.Type.back};
      }
    });
  };
  _changFlash = () => {
    this.setState (prevState => {
      if (prevState.flash === Camera.Constants.FlashMode.off) {
        return {flash: Camera.Constants.FlashMode.on};
      } else if (prevState.flash === Camera.Constants.FlashMode.on) {
        return {flash: Camera.Constants.FlashMode.auto};
      } else if (prevState.flash === Camera.Constants.FlashMode.auto) {
        return {flash: Camera.Constants.FlashMode.off};
      }
    });
  };
  _takePhoto = async () => {
    const {pictureTaken} = this.state;
    if (!pictureTaken) {
      if (this.camera) {
        const takenPhoto = await this.camera.takePictureAsync ({
          quality: 1,
          exif: true,
        });
        this.setState ({
          picture: takenPhoto.uri,
          pictureTaken: true,
        });
      }
    }
  };
  _rejectPhoto = () => {
    this.setState ({
      picture: null,
      pictureTaken: false,
    });
  };
  _approvePhoto = async () => {
    const {picture} = this.state;
    const {navigation: {navigate}} = this.props;
    const saveResult = await CameraRoll.saveToCameraRoll (picture, 'photo');
    navigate ('UploadPhoto', {url: picture});
    this.setState ({
      picture: null,
      pictureTaken: false,
    });
  };
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  camera: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: '#FAFAFA',
    borderColor: '#BBB',
    borderWidth: 15,
    borderRadius: 100,
  },
  actions: {
    backgroundColor: 'transparent',
    height: 40,
    width: 40,
    margin: 10,
  },
  photoActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
    width: 250,
  },
});

export default CameraScreen;
