import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
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

    // componentWillMount() {
    //     // this.props.fetchTweets();
        
    // }

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

    // update() {
    //     // console.log('update text',this.state.text)
    //     return e => this.setState({
    //     query: e.currentTarget.value
    //     });
    // }

    searchUsers(e){
        e.preventDefault()
        //maybe push array of other results
        axios.get(`search/${this.state.query}`)
          .then(res => 
            // console.log(res)
            this.setState({result: res.data}, this.props.history.replace('/search'))

          ).catch(err => console.log('results err', err))
      }




    render() {
        // let disabler = true
        // if (this.state.text.length > 0){
        // disabler = false
        // }
        
        // console.log('update', this.state.query)
        // console.log('search res', this.state.result)
        // setTimeout(()=>console.log('res object handle: ', Object.values(this.state.result[0][0]).map(each => each)), 4000)
        let multiple = []
        let single = []
        if (this.state.result.length > 1) {
            multiple = this.state.result
            console.log('mult', multiple)
        } else {
            single = this.state.result
            console.log('sing',single)
        }

    


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
        <div className="search-container">
          <div className="search-bar">
            <h1 className="search-title">Results for '{this.state.query}'</h1>
            {/* <input 
                type="text"
            /> */}
            <p><i className="fas fa-ellipsis-h disabled"></i></p>
            {/* <div className='sparkle'>✨</div> */}
          </div>
          
          <div className="results">
            <div></div>
              {multiple.map((each) => {
                  return (
                    <div>{each.handle}</div>
                  )
              })}

              {Object.values(single)[0].handle}
              
            {/* {this.state.result.map(user => (
                <div>{user.handle}</div>
            //   <TweetBox key={tweet._id} date={tweet.date} user={tweet.user} text={tweet.text} />
            ))} */}
            {/* {this.state.result.handle} */}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Search);