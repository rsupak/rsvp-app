import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var PLAYERS = [
  {
    name: "Rich Supak",
    score: 31,
    id: 1,
  },
  {
    name: "Lace Supak",
    score: 33,
    id: 2,
  },
  {
    name: "Jules Supak",
    score: 27,
    id: 3,
  },
];

ReactDOM.render(<App initialPlayers={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
