import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   query: '',
    //   result: null
    // }
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // update() {
  //   return e => this.setState({
  //     query: e.currentTarget.value
  //   });
  // }

  // searchUsers(){
  //   //maybe push array of other results
  //   axios.get(`search/${this.state.query}`)
  //     .then(res => 
  //       console.log(res)
  //       // this.setState({result: res.data.handle})
  //     ).catch(err => console.log('results err', err))
  // }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div 
              className="navbar"
            >
                <Link to={'/tweets'}><p><i className="fab fa-earlybirds"></i></p></Link>
                <Link to={'/tweets'}><p><i className="fas fa-igloo"></i></p></Link>
                <Link to={'/search'}><p><i className="fas fa-search"></i></p></Link>
                {/* <input 
                  onChange={this.update()}
                  
                  type="text"
                /> */}
                {/* <div
                  onClick={()=>this.searchUsers()}
                >
                  x
                </div> */}

                {/* </input> */}
                <p><i className="far fa-bell disabled"></i></p>
                <p><i className="far fa-envelope disabled"></i></p>
                <p><i className="far fa-bookmark disabled"></i></p>
                <p><i className="fas fa-stream disabled"></i></p>
                <Link to={'/profile'}><p><i className="far fa-user"></i></p></Link>
                <p><i className="fas fa-ellipsis-h disabled"></i></p>
                <Link to={'/new_tweet'}><p><i className="fas fa-feather"></i></p></Link>
                <button 
                  onClick={this.logoutUser}
                  className="logout"
                >
                </button>
            </div>
        );
      } else {
        return (
            <div className="top-links">
                {/* <Link to={'/signup'}><p>Signup</p></Link>
                <Link to={'/login'}><p>Login</p></Link> */}
            </div>
        );
      }
  }

  render() {
      return (
        <div
          className="navbar"
        >
            
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;