import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

const HAND_SIZE = 5;

class Game extends PureComponent {
  render() {
    const hand = this.props.deck.slice(0, HAND_SIZE);

    return <Field hand={hand} />;
  }
}

Game.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Game;
