import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CrystalCard from './CrystalCard';

const styles = theme => ({
  hand: {}
});

class Field extends PureComponent {
  render() {
    const { classes, hand } = this.props;

    return (
      <GridList className={classes.hand}>
        {hand.map((card, index) => {
          return <CrystalCard key={index} {...card} />;
        })}
      </GridList>
    );
  }
}

Field.propTypes = {
  hand: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(Field);
