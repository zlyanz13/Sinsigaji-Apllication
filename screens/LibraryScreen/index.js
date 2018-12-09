import React, {Component} from 'react';
import {CameraRoll} from 'react-native';
import {Permissions} from 'expo';
import LibraryScreen from './presenter';

class Container extends Component {
  state = {
    photos: null,
    pickedPhoto: null,
    hasDiskPermission: null,
  };
  componentWillMount = async () => {
    const storage = await Permissions.askAsync (Permissions.CAMERA_ROLL);
    if (storage.status === 'granted') {
      const cameraPhotos = await CameraRoll.getPhotos ({
        first: 20,
        assetType: 'Photos',
      });
      this.setState ({
        hasDiskPermission: true,
        photos: cameraPhotos.edges,
        pickedPhoto: cameraPhotos.edges[0],
      });
    }
  };
  render () {
    return (
      <LibraryScreen
        {...this.state}
        pickPhoto={this._pickPhoto}
        approvePhoto={this._approvePhoto}
      />
    );
  }
  _pickPhoto = photo => {
    this.setState ({
      pickedPhoto: photo,
    });
  };
  _approvePhoto = () => {
    const {navigation: {navigate}} = this.props;
    const {pickedPhoto} = this.state;
    navigate ('UploadPhoto', {url: pickedPhoto.node.image.uri});
  };
}

export default Container;
