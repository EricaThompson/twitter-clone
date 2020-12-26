import React from 'react';
import { withRouter } from 'react-router-dom';
// import TweetBox from '../tweets/tweet_box';
import axios from 'axios';
// import e from 'express';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            result: []
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        // this.props.fetchTweets();
        
    }

//   componentWillReceiveProps(nextProps) {
//     this.setState({ newTweet: nextProps.newTweet })
//   }

    update() {
        return e => this.setState({
        query: e.currentTarget.value
        });
    }


    // handleSubmit(e) {
    //     // console.log('props user id', this.props.user.id)
    //     e.preventDefault();
    //     let tweet = {
    //     text: this.state.text,
    //     // id: this.props.user.id
    // };

    //     this.props.composeTweet(tweet)
    //     .then(()=>this.props.fetchTweets())
        
    //     this.setState({text: ''})
    // }

    update() {
        // console.log('update text',this.state.text)
        return e => this.setState({
        query: e.currentTarget.value
        });
    }

    searchUsers(e){
        e.preventDefault()
        //maybe push array of other results
        axios.get(`search/${this.state.query}`)
          .then(res => 
            // console.log(res)
            this.setState({result: res})
          ).catch(err => console.log('results err', err))
      }




    render() {
        // let disabler = true
        // if (this.state.text.length > 0){
        // disabler = false
        // }
        console.log('update', this.state.query)
        console.log('search res', this.state.result)


    


    if (this.state.result.length === 0) {
      return (<div className="search-bar">
                <p><i className="fas fa-search search-bar-icon"></i></p>
                <form 
                    onSubmit={(e)=>this.searchUsers(e)}
                    className="search-form">
                    <input
                        onChange={this.update()}
                        className="search" 
                        type="text"
                        placeholder="Search Owly"
                    />
                </form>
            </div>
            )
    } else {
      return (
        <div className="tweets">
          <div className="home-bar">
            <h1 className="home-title">Home</h1>
            {/* <input 
                type="text"
            /> */}
            <p><i className="fas fa-ellipsis-h disabled"></i></p>
            {/* <div className='sparkle'>✨</div> */}
          </div>
          <div className="compose-block">
            <div className="profile-pic"></div>
            <div className="input-area">
              {/* <form onSubmit={this.handleSubmit}>
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
              </form> */}
            <br />
            {/* <TweetBox text={this.state.newTweet} /> */}
        </div>
          </div >
          <div className="feed">
            {/* {this.state.result.map(user => (
                <div>{user.handle}</div>
            //   <TweetBox key={tweet._id} date={tweet.date} user={tweet.user} text={tweet.text} />
            ))} */}
            {this.state.result.handle}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Search);