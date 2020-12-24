import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';
import TweetCompose from './tweet_compose';

class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  componentWillMount() {
    this.props.fetchTweets();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tweets: newState.tweets });
  }

  render() {
    if (this.state.tweets.length === 0) {
      return (<div>There are no Tweets</div>)
    } else {
      return (
        <div>
          <h2 className="home-title">Home</h2>
          <div className="compose-block">
            <div className="profile-pic"></div>
            <TweetCompose /> 
          </div>
          {this.state.tweets.map(tweet => (
            <TweetBox key={tweet._id} text={tweet.text} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Tweet);