import React from 'react';

const styles = {display: 'inline-block'};

const PlayerSelect = (props) => (
  <div>
    <div style={styles}>
      Select player:
    </div>
    <div 
      style={styles} 
      onClick={() => props.onClick("X")}
    >
      X
    </div>
    <div 
      style={styles} 
      onClick={() => props.onClick("O")}
    >
      O
    </div>
  </div>
)

export default PlayerSelect;