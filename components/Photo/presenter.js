import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import FadeIn from 'react-native-fade-in-image';
import StarRating from 'react-native-star-rating';
import PhotoActions from '../PhotoActions';
import {withNavigation} from 'react-navigation';

const {width, height} = Dimensions.get ('window');

const Photo = props => (
  <View style={styles.photo}>

    <TouchableOpacity
      onPressOut={() =>
        props.navigation.navigate ('ProfileDetail', {
          user: props.creator,
        })}
    >
      <View style={styles.header}>
        <FadeIn>
          <Image
            source={
              props.creator.profile_image
                ? {
                    uri: props.creator.profile_image,
                  }
                : require ('../../assets/images/noPhoto.jpg')
            }
            style={styles.avatar}
          />
        </FadeIn>
        <View>
          <Text style={styles.author}>{props.creator.username}</Text>
          {props.location &&
            <Text style={styles.location}>{props.location.name}</Text>}
        </View>
      </View>
    </TouchableOpacity>
    <FadeIn>
      <Image
        source={{uri: props.file}}
        style={{width: width, height: props.is_vertical ? 600 : 300}}
      />
    </FadeIn>
    <View style={styles.photoMeta}>
      <PhotoActions
        isLiked={props.isLiked}
        likeCount={props.likeCount}
        stars={props.stars}
        handlePress={props.handlePress}
      />
      <View style={styles.comment}>
        <Text style={styles.lines}>
          <Text style={styles.commentAuthor}>{props.creator.username} </Text>
          <Text style={styles.message}>{props.caption}</Text>
        </Text>
      </View>
      {props.comments.length > 0 &&
        <TouchableOpacity
          onPressOut={() => props.navigation.navigate ('Comments')}
        >
          <View style={styles.commentsLink}>
            {props.comments.length === 1
              ? <Text style={styles.linkText}>View 1 comment</Text>
              : <Text style={styles.linkText}>
                  View all {props.comments.length} comments
                </Text>}
          </View>
        </TouchableOpacity>}
      <Text style={styles.dateText}>{props.natural_time.toUpperCase ()}</Text>
    </View>
  </View>
);
/*
<Rating
    showRating={false}
    type="custom"
    fractions={1}
    startingValue={props.stars}
    readonly={true}
    imageSize={30}
    rating
    onFinishRating={null}
    onStartRating={null}
    showReadOnlyText={false}
    ratingColor={'#FFB12F'}
    ratingBackgroundColor={'#FAFAFA'}
    ratingTextColor={'blue'}
    style={{ paddingVertical: 10, paddingLeft: 10, backgroundColor: '#FAFAFA' }}
/>
*/
const styles = StyleSheet.create ({
  photo: {
    width: width,
    marginBottom: 10,
  },
  header: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  author: {
    fontWeight: '600',
    marginBottom: 3,
    fontSize: 15,
  },
  location: {
    fontSize: 12,
  },
  photoMeta: {
    marginTop: 5,
    paddingHorizontal: 12,
  },
  comment: {
    marginTop: 3,
  },
  lines: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  commentAuthor: {
    marginRight: 5,
    fontWeight: '600',
    fontSize: 15,
  },
  message: {
    fontWeight: '400',
    fontSize: 15,
    marginRight: 5,
    flexWrap: 'wrap',
  },
  commentsLink: {
    color: '#999',
    fontSize: 14,
  },
  dateText: {
    fontSize: 11,
    color: '#999',
    marginTop: 5,
  },
});

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.shape ({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired,
  }).isRequired,

  file: PropTypes.string.isRequired,
  like_count: PropTypes.number.isRequired,
  is_liked: PropTypes.bool.isRequired,
  is_vertical: PropTypes.bool.isRequired,

  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape ({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,

  stars: PropTypes.number.isRequired,
  natural_time: PropTypes.string.isRequired,

  location: PropTypes.shape ({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    starpoint_avg: PropTypes.number.isRequired,
    starpoint_count: PropTypes.number.isRequired,
    station: PropTypes.shape ({
      id: PropTypes.number.isRequired,
      lines: PropTypes.arrayOf (
        PropTypes.shape ({
          line_num: PropTypes.string.isRequired,
        })
      ),
      station_nm: PropTypes.string.isRequired,
    }),
  }).isRequired,

  handlePress: PropTypes.func.isRequired,
};

export default withNavigation (Photo);
