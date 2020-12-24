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
            <div className="top-links">
                <Link to={'/tweets'}><p>All Tweets</p></Link>
                <Link to={'/profile'}><p>Profile</p></Link>
                <Link to={'/new_tweet'}><p>Write a Tweet</p></Link>
                <button onClick={this.logoutUser}>Logout</button>
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
        <div>
            <h1>OWLY</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;