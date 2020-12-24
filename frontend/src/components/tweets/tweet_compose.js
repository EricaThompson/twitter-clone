import React from 'react';
import TweetBox from './tweet_box';

class TweetCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          text: "",
          newTweet: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      this.setState({newTweet: nextProps.newTweet.text});
  }

  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      text: this.state.text
    };

    this.props.composeTweet(tweet); 
    this.setState({text: ''})
  }

  update() {
    return e => this.setState({
      text: e.currentTarget.value
    });
  }

  render() {
    let disabler = true
    if (this.state.text.length > 0){
      disabler = false
    }

    return (
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
            <TweetBox text={this.state.newTweet} />
        </div>
    )
  }
}

export default TweetCompose;