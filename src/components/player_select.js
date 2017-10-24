import React from 'react';

const styles = {display: 'inline-block', marginRight: '1em'};

const PlayerSelect = (props) => (
  <div className="player-select">

    <div 
      className="btn active"
      style={styles} 
      onClick={() => props.onClick("X")}
    >
      X
    </div>
    <div 
      className="btn"
      style={styles} 
      onClick={() => props.onClick("O")}
    >
      O
    </div>
  </div>
)

export default PlayerSelect;