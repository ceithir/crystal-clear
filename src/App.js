import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CrystalCard from './components/CrystalCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <CrystalCard
          name={`A tiny bit of light`}
          text={`Grant +1 light energy.`}
          flavor={`It’s not much, but it’s the spark of hope.`}
        />
        <CrystalCard
          name={`Darkness`}
          text={`You must destroy all of those to purify the crystal.`}
          flavor={`Minor flaws turned into gulfs of despair through years of neglect.`}
          theme={`dark`}
        />
      </React.Fragment>
    );
  }
}

export default App;
