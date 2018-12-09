import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import FadeIn from 'react-native-fade-in-image';
import Autocomplete from "react-native-autocomplete-input"

const {width, height} = Dimensions.get ('window');

const UploadPhotoScreen = props => (
  <View style={styles.container}>
    <ScrollView>
      <View style={styles.formRow}>
        <FadeIn style={styles.photoContainer}>
          <Image source={{uri: props.imageURL}} style={styles.photo} />
        </FadeIn>
        <TextInput
          value={props.caption}
          placeholder={'Caption'}
          style={styles.caption}
          multiline={true}
          placeholderTextColor={'#888'}
          onChangeText={props.onCaptionChange}
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          value={props.station}
          placeholder={'Station'}
          style={styles.input}
          placeholderTextColor={'#888'}
          onChangeText={props.onStationChange}
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          value={props.location}
          placeholder={'Location'}
          style={styles.input}
          placeholderTextColor={'#888'}
          onChangeText={props.onLocationChange}
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          value={props.stars}
          placeholder={'Stars'}
          style={styles.input}
          placeholderTextColor={'#888'}
          onChangeText={props.onStarChange}
        />
      </View>
      <View style={styles.formRow}>
        <TextInput
          value={props.tags}
          placeholder={'Tags (separated by commas)'}
          style={styles.input}
          placeholderTextColor={'#888'}
          autoCapitalize={'none'}
          onChangeText={props.onTagsChange}
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity onPressOut={props.submit}>
        <View style={styles.uploadBtn}>
          {props.isSubmitting
            ? <ActivityIndicator color="white" />
            : <Text style={styles.uploadText}>Upload photo</Text>}
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);
UploadPhotoScreen.propTypes = {
  imageURL: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onCaptionChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onStationChange: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  photoContainer: {
    height: 80,
    width: 80,
  },
  photo: {
    flex: 1,
  },
  formRow: {
    flexDirection: 'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15,
  },
  caption: {
    marginLeft: 20,
    flex: 1,
  },
  form: {
    flex: 1,
  },
  input: {
    flex: 1,
  },
  uploadBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: width / 2,
    height: 50,
    backgroundColor: '#3E99EE',
    borderRadius: 25,
    overflow: 'hidden',
  },
  uploadText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default UploadPhotoScreen;
