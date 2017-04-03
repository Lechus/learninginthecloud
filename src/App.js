import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import Header from './Header/components/Header'
import { firebaseConfig } from './core/firebase/config';
import * as firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database();
  }

  render() {
    return (
      <div className="app">
      <Header title="Let's chat" />
      <ThreadDisplay database={this.database} />
      </div>
    );
  }
}

export default App;
