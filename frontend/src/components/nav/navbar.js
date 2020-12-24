import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div 
              className="navbar"
            >
                <Link to={'/tweets'}><p><i className="fas fa-igloo"></i></p></Link>
                <Link to={'/profile'}><p><i className="far fa-user"></i></p></Link>
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
                <Link to={'/signup'}><p>Signup</p></Link>
                <Link to={'/login'}><p>Login</p></Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div
          className="navbar"
        >
            <h1><Link to={'/tweets'}><p><img className="logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/owl_1f989.png" alt="owly logo" /></p></Link></h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;