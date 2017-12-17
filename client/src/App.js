import React, { Component } from 'react';
import './styles/App.css';
import { Stats } from './stats/stats';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Stats/>
      </div>
    );
  }
}

export default App;
