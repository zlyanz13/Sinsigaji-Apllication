import {connect} from 'react-redux';
import Container from './container';
import {actionCreators as userActions} from '../../redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
  const {creator: {id}} = ownProps;
  return {
    unfollowUser: () => {
      return dispatch (userActions.unfollowUser (id));
    },
    followUser: () => {
      return dispatch (userActions.followUser (id));
    },
  };
};

export default connect (null, mapDispatchToProps) (Container);
