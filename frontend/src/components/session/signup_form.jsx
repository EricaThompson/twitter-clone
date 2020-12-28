import React from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
// import { login } from '../../util/session_api_util';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  // componentDidUpdate(){
  //   this.props.login(this.state)
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history.push('/tweets')); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <div className='errors'>
            {this.state.errors[error]}
          </div>
          // <li key={`error-${i}`}>
          // </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-container">
        <p className="session-logo">🦉</p>
        <h1 className="session-title">Sign up for Owly</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="session-form sign-up">
            <br/>
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
                type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
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
                className="session-input"
                type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input
              className="session-submit" 
              type="submit" 
              value="Sign up" />
              {this.renderErrors()}
            <Link to={'/login'}><p className="session-link">Already signed up? Log in to Owly</p></Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);