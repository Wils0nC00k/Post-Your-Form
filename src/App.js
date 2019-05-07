import React, { Component } from 'react';
import './App.css';
import MoviesForm from './MoviesForm';
// import LifeCycles from './LifeCycles';

class App extends Component {
  render  () {
    return (
      <div className="App">
        <MoviesForm />

      </div>
    );
  }
}

export default App;
