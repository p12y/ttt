import React from 'react';

const ScoreBoard = (props) => (
  <div>
    <div>Score:</div>
    <div>Human: {props.human}</div>
    <div>Computer: {props.ai}</div>
  </div>
)

export default ScoreBoard;