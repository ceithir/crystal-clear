import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Game from './components/Game';
import { loadCrystalCards } from './cards/crystals';
import './App.css';

const deck = loadCrystalCards(['light-1', ...Array(9).fill('dark-1')]);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Game deck={deck} />
      </React.Fragment>
    );
  }
}

export default App;
