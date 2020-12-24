import React from 'react';

class TweetBox extends React.Component {
  render() {
    return (
        <div className="tweet-box">
            <h3 className="tweet">{this.props.text}</h3>
        </div>
    );
  }
}

export default TweetBox;