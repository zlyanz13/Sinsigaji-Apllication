import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import StarRating from 'react-native-star-rating';

const PhotoActions = props => (
  <View style={styles.container}>
    <StarRating
      disabled={true}
      maxStars={5}
      rating={props.stars}
      selectedStar={null}
      emptyStar={'md-star-outline'}
      fullStar={'md-star'}
      halfStar={'md-star-half'}
      iconSet={'Ionicons'}
      fullStarColor={'#FFB12F'}
      halfStarColor={'#FFB12F'}
      emptyStarColor={'#FFB12F'}
      halfStarEnabled={true}
      starSize={30}
      containerStyle={{justifyContent: 'flex-start'}}
    />
    <View style={styles.actions}>
      <TouchableOpacity onPressOut={props.handlePress}>
        <View style={styles.action}>
          <Icon
            name={props.isLiked ? 'md-heart' : 'md-heart-empty'}
            size={30}
            color={props.isLiked ? '#eb4b59' : 'black'}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPressOut={() => props.navigation.navigate ('Comments')}
      >
        <View>
          <Icon name={'ios-chatboxes'} size={30} color={'black'} />
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPressOut={() => props.navigation.navigate ('Likes')}>
      <View>
        <Text style={styles.likes}>
          {props.likeCount}
          {props.likeCount === 1 ? ' like' : ' likes'}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create ({
  container: {},
  actions: {flexDirection: 'row'},
  action: {marginRight: 10},
  likes: {fontWeight: '600', fontSize: 14},
});

PhotoActions.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  likeCount: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
};
export default withNavigation (PhotoActions);
/*
;

*/
