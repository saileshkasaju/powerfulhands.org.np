import React, { Component } from 'react';
import logo from '../logo.jpg';
import './App.css';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Powerful Hands, Nepal</h2>
        </div>
        <div className="container-fluid">
          <Header
            loading={this.props.loading}
          />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
