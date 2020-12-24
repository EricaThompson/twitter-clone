import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';
import axios from 'axios';
// import TweetCompose from './tweet_compose';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      text: '',
      newTweet: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.props.fetchTweets();
    
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newTweet: nextProps.newTweet })
  }


  handleSubmit(e) {
    // console.log('props user id', this.props.user.id)
    e.preventDefault();
    let tweet = {
      text: this.state.text,
      // id: this.props.user.id
    };

    this.props.composeTweet(tweet);
    this.setState({text: ''})
  }

  update() {
    // console.log('update text',this.state.text)
    return e => this.setState({
      text: e.currentTarget.value
    });
  }




  render() {
    let disabler = true
    if (this.state.text.length > 0){
      disabler = false
    }


    if (this.props.tweets.length === 0) {
      return (<div>There are no Tweets</div>)
    } else {
      return (
        <div>
          <h2 className="home-title">Home</h2>
          <div className="compose-block">
            <div className="profile-pic"></div>
            <div className="input-area">
              <form onSubmit={this.handleSubmit}>
                  <div>
                      <input type="textarea"
                          className="tweet-compose-input"
                          value={this.state.text}
                          onChange={this.update()}
                          placeholder="What's happening?"
                      />
                      <input
                        className="compose-button"
                        disabled={disabler} 
                        type="submit" 
                        value="Tweet" 
                      />
                  </div>
              </form>
            <br />
            {/* <TweetBox text={this.state.newTweet} /> */}
        </div>
          </div>
          {this.props.tweets.map(tweet => (
            <TweetBox key={tweet._id} text={tweet.text} />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Tweet);