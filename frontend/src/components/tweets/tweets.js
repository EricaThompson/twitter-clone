import React from 'react';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';

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

    this.props.composeTweet(tweet)
      .then(()=>this.props.fetchTweets())
    
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
      return (<div className='tweets-spinner spinner'><i className="fas fa-spinner fa-spin"></i></div>)
    } else {
      return (
        <div className="tweets">
          <div className="home-bar">
            <h1 className="home-title">Home</h1>
            <div className='sparkle'>✨</div>
          </div>
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
                      <div className="compose-buttons">
                        <i className="far fa-image"></i>
                        <div className="gif">GIF</div>
                        <i className="far fa-chart-bar"></i>
                        <i className="far fa-smile"></i>
                        <i className="far fa-calendar-plus"></i>
                      </div>
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
          </div >
          <div className="feed">
            {this.props.tweets.map(tweet => (
              <TweetBox key={tweet._id} date={tweet.date} user={tweet.user} text={tweet.text} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Tweet);