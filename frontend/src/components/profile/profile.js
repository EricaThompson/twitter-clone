import React from 'react';
import TweetBox from '../tweets/tweet_box';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: [],
            status: ''
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserTweets(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
        this.setState({status: 'hello'})
    }   
    
    render() {
      console.log(this.state.tweets)
      let timestamp = this.props.currentUser.id.toString().substring(0,8)
      let date = new Date( parseInt( timestamp, 16 ) * 1000 )
      let month = date.getMonth()
      
      
      // let year = date.getFullYear()
  
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

      // switch (year) {
      //   case value:
          
      //     break;
      
      //   default:
      //     break;
      // }
    
        // this.state.tweets.map(tweet => (
        //   <TweetBox key={tweet._id} text={tweet.text} />
        // ))

        if (this.state.tweets.length === 0) {
          return (<div>This user has no Tweets{this.state.status}</div>)
        } else {
          return (
            <div className="profile-container">
              <div className="profile-bar">
                <div><Link to="/tweets"><i className="fas fa-arrow-left"></i></Link></div>
                <div className="bar-right-side">
                  <div className="profile-handle">{this.props.currentUser.handle}</div>
                  <div>{this.state.tweets.length} Tweets</div>
                </div>
              </div> 
              <div className="header-img-container">
                <img className="header-img" src='https://campsound-dev.s3-us-west-1.amazonaws.com/pexels-lisa-fotios-2215534.jpg' alt='' />
              </div>

              <div className="profile-container">
                  <div className="profile-pic main"></div>
                  <div className="profile">
                    <div className="profile-handle">@{this.props.currentUser.handle}</div>
                    <div className="profile-date"><i className="far fa-calendar-alt"></i>  Joined {month} {date.getFullYear()}</div>
                  </div>

              </div>
              <div className="profile-tabs">
                <div className="tab selected">Tweets</div>
                <div className="tab">Tweets & replies</div>
                <div className="tab">Media</div>
                <div className="tab">Likes</div>
              </div>

              
              <div className='profile-feed'>
                <div className="profile-tweet-box">

                  {this.state.tweets.reverse().map(tweet => (
                    <TweetBox key={tweet._id} date={tweet.date} user={tweet.user} text={tweet.text} />
                  ))}
                </div>
              </div>
            </div>
          );
        }
      }
}

export default Profile;