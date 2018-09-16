import React, { Component } from 'react';
import GiphySearch from './components/GiphySearch/';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GraphQL Hello World</h1>
        </header>
        <GiphySearch />
      </div>
    );
  }
}

export default App;
