import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>A Twitter Clone</h1>
        <div>
          <Link to={'/login'} >login</Link>
          <br />
          <Link to={'/signup'} >signup</Link>
        </div>
        <footer>
          Copyright &copy; 2019 Chirper
        </footer>
      </div>
    );
  }
}

export default MainPage;