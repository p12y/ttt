import React from 'react';

const styles = {display: 'inline-block', marginRight: '1em', fontSize: '1.5em'};

const ScoreBoard = (props) => (
  <div className="score-board">
    <div style={styles}>Human: {props.human}</div>
    <div style={styles}>Computer: {props.ai}</div>
  </div>
)

export default ScoreBoard;