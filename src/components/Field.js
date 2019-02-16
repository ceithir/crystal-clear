import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CrystalCard from './CrystalCard';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  action: {
    textAlign: 'center'
  },
  hand: {}
});

class Field extends PureComponent {
  render() {
    const { classes, hand } = this.props;

    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs />
          <Grid item xs={8} className={classes.action}>
            <Button variant="outlined">{`Infuse light`}</Button>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container>
          <Grid item xs />
          <Grid item xs={8}>
            <GridList className={classes.hand}>
              {hand.map((card, index) => {
                return <CrystalCard key={index} {...card} />;
              })}
            </GridList>
          </Grid>
          <Grid item xs />
        </Grid>
      </React.Fragment>
    );
  }
}

Field.propTypes = {
  hand: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(Field);
