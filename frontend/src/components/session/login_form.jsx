import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);  }

  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.replace('/tweets');
      // this.window.reload()
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
    this.props.history.push('/tweets')
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <div className="errors">
            {/* <li key={`error-${i}`}> */}
              {this.state.errors[error]}
            {/* </li> */}
          </div>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-container">
        <p className="session-logo">🦉</p>
        <h1 className="session-title">Log in to Owly</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="session-form log-in">
              <input
                className="session-input" 
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input 
                className="session-input" 
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input 
              className="session-submit"
              type="submit" 
              value="Log in" />
              {this.renderErrors()}
            <Link to={'/signup'}><p className="session-link">Sign up for Owly</p></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);