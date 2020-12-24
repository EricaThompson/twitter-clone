import React from 'react';

class TweetBox extends React.Component {
  render() {
    return (
        <div className="tweet-box">
            {/* <h2>{this.props.user.handle}</h2> */}
            <div className="profile-pic"></div>
            <h3 className="tweet">{this.props.text}</h3>
            <div className='social-icons'>
              <i className="far fa-comment"></i>
              <i className="fas fa-retweet"></i>
              <i className="far fa-heart"></i>
              <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>
    );
  }
}

export default TweetBox;