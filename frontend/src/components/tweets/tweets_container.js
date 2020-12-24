import { connect } from 'react-redux';
import { fetchTweets, composeTweet } from '../../actions/tweet_actions';
import Tweets from './tweets';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all),
    newTweet: state.tweets.new,
    currentUser: state.session.user
    // errors: state.errors.
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets()),
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);