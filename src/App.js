import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default post-editor">
          <div className="panel-body">
            <textarea className="form-control post-editor-input"></textarea>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
