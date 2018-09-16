import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const Header = props => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const CounterDisplay = ({onIncrement, onDecrement, score}) => (
  <div className="counter">
    <button className="counter-action decrement" onClick={onDecrement}> - </button>
    <div className="counter-score"> {score} </div>
    <button className="counter-action increment" onClick={onIncrement}> + </button>
  </div>
);

const Counter = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0
    } //initial counter value
  }

  incrementScore = () => this.setState({
    score: this.state.score + 1
  });
  
  decrementScore = () => this.setState({
    score: this.state.score - 1
  });

  render() {
    return (<CounterDisplay score={this.state.score} 
                            onIncrement={this.incrementScore} 
                            onDecrement={this.decrementScore} />
    );
  }
};

const Player = props => {
    return (
      <div className="player">
        <div className="player-name">
          {props.name}
        </div>
        <div className="player-score">
          <Counter/>
        </div>
      </div>
    )
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

const App = (props) => {
    return (
      <div className="scoreboard">
        <Header title={props.title}/>
        <div className="players">
          {props.players.map((player) => {
            return (
              <Player name={player.name} 
                      score={player.score} 
                      key={player.id}/>
            )
          })}
        </div>
      </div>
    )
}

App.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: "Scoreboard",
}

export default App;
