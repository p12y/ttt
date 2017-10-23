import React from 'react';

const styles = {display: 'inline-block'};

const ScoreBoard = (props) => (
  <div>
    <div style={styles}>Score:</div>
    <div style={styles}>Human: {props.human}</div>
    <div style={styles}>Computer: {props.ai}</div>
  </div>
)

export default ScoreBoard;