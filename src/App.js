import React, { Component } from 'react';
import './App.css';
import Comics from './Comics';
import List from './List';



class App extends Component {
  render() {
    return (
      <div>
        <List result={Comics().data.results} />
      </div>
    );
  }
}

export default App;
