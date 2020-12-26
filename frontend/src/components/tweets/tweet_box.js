import React from 'react';
const { MongoClient } = require("mongodb");

class TweetBox extends React.Component {
  render() {
    // let author = User.findOne(this.props.user)
      let timestamp = this.props.date.toString().substring(0,8)
      let date = new Date( parseInt( timestamp, 16 ) * 1000 )
      let month = date.getMonth()
      let day = date.getDate();

      switch (month) {
        case 0:
          month = "Jan"
          break;
        case 1:
          month = "Feb"
          break;
        case 2:
          month = "March"
          break;
        case 3:
          month = "April"
          break;
        case 4:
          month = "May"
          break;
        case 5:
          month = "June"
          break;
        case 6:
          month = "July"
          break;
        case 7:
          month = "Aug"
          break;
        case 8:
          month = "Sept"
          break;
        case 9:
          month = "Oct"
          break;
        case 10:
          month = "Nov"
          break;
        case 11:
          month = "Dec"
          break;
      
        default:
          break;
      }
    return (
        <div className="tweet-box">
            <div className="profile-pic"></div>
            <div>
              <div className="top">
                <p className="tweet-box-handle">{this.props.user} · {month} {day}</p>
                <i className="fas fa-ellipsis-h tweet-box-options"></i>
              </div>
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
        </div>
    );
  }
}

export default TweetBox;