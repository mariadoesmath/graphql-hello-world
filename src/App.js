import React, { Component } from 'react';
import SearchButton from './components/searchButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GraphQL Hello World</h1>
        </header>
        <p className="App-intro">
          More to come...
        </p>
        <SearchButton />
      </div>
    );
  }
}

export default App;
