/**
 * Created by Edge on 2/25/2017.
 */
import React from 'react';
import {Link} from 'react-router';
import './HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Powerful Hands, Nepal</h1>
        <p>This page is powered by React and Redux.</p>
        <Link to="profile" className="btn btn-primary btn-lg">profile</Link>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;