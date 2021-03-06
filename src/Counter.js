import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div className="counter">
    <button className="counter-action decrement" 
      onClick={() => {props.onChange(-1);}} > - </button>
    <div className="counter-score"> {props.score} </div>
    <button className="counter-action increment"
      onClick={() => {props.onChange(1);}} > + </button>
  </div>
);

Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Counter;

// const Counter = class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       score: this.props.initialScore,
//     } //initial counter value
//   }

//   incrementScore = () => this.setState({
//     score: this.state.score + 1
//   });
  
//   decrementScore = () => this.setState({
//     score: this.state.score - 1
//   });

//   render() {
//     return (<CounterDisplay score={this.state.score} 
//                             onIncrement={this.incrementScore} 
//                             onDecrement={this.decrementScore} />
//     );
//   }
// };
