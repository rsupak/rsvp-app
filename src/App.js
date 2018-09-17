import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player'
import Header from './Header'

import './App.css';

const App = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: this.props.initialPlayers,
    }
  }

  onScoreChange = (index, delta) => {
    console.log('onScoreChange', index, delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          {this.state.players.map((player, index) => {
            return (
              <Player 
                onScoreChange = {(delta) => {
                  this.onScoreChange(index, delta)
                }}
                name={player.name} 
                score={player.score} 
                key={player.id}
              />
            );
          })}
        </div>
      </div>
    )
  }
};

App.propTypes = {
  title: PropTypes.string,
  initialPlayers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: "Scoreboard",
};

export default App;
