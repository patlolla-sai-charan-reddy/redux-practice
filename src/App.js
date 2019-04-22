import React, { Component } from 'react';
import './App.css';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {triggerUser} from './actions/userActions'
class App extends Component {
  constructor(props) {
    super(props);
    this.triggerUser = this.triggerUser.bind(this)
  }
  triggerUser(event) {
    this.props.triggerUser(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input onChange={this.triggerUser}/>
          <h5>{this.props.name}</h5>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    triggerUser: triggerUser
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(App);
