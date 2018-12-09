import React, {Component} from 'react';
import UploadPhotoScreen from './presenter';
import PropTypes from 'prop-types';
import {Alert} from 'react-native';

class Container extends Component {
  state = {
    caption: '',
    location: '',
    tags: '',
    station: '',
    stars: '',
    isSubmitting: false,
  };
  render () {
    const {navigation: {state: {params: {url}}}} = this.props;
    return (
      <UploadPhotoScreen
        imageURL={url}
        onCaptionChange={this._onCaptionChange}
        onLocationChange={this._onLocationChange}
        onTagsChange={this._onTagsChange}
        onStationChange={this._onStationChange}
        onStarChange={this._onStarChange}
        submit={this._submit}
        {...this.state}
      />
    );
  }
  _onCaptionChange = text => {
    this.setState ({
      caption: text,
    });
  };
  _onLocationChange = text => {
    this.setState ({
      location: text,
    });
  };
  _onTagsChange = text => {
    this.setState ({
      tags: text,
    });
  };
  _onStationChange = text => {
    this.setState ({
      station: text,
    });
  };
  _onStarChange = text => {
    this.setState ({
      stars: text,
    });
  };
  _submit = async () => {
    const {caption, location, tags, station, stars} = this.state;
    const {
      submit,
      navigation,
      navigation: {state: {params: {url}}},
    } = this.props;
    if (caption && location && tags) {
      
      this.setState ({
        isSubmitting: true,
      });
      
      const uploadResult = submit (
        url,
        caption,
        station,
        location,
        stars,
        tags
      );
      
      if (uploadResult) {
        navigation.goBack (null);
        navigation.goBack (null);
        navigation.goBack (null);
      }
      
    } else {
      Alert.alert ('All fields are required');
    }
  };
}
export default Container;
