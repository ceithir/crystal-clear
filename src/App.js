import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Field from './components/Field';
import { loadCrystalCards } from './cards/crystals';
import Grid from '@material-ui/core/Grid';
import './App.css';

const hand = loadCrystalCards(['light-1', ...Array(9).fill('dark-1')]);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container>
          <Grid xs />
          <Grid item xs={8}>
            <Field hand={hand} />
          </Grid>
          <Grid xs />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
