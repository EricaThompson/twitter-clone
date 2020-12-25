import React from 'react';
const { MongoClient } = require("mongodb");

class TweetBox extends React.Component {
  render() {
    // let author = User.findOne(this.props.user)
    return (
        <div className="tweet-box">
            <div className="profile-pic"></div>
            <div>{this.props.user}</div>
            <br />
            <br />
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