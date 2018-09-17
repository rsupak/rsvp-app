import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter'


const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter 
          score={props.score}
          onChange={props.onScoreChange} 
        />
      </div>
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
};

export default Player;
