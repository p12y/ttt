import React from 'react';

const styles = {display: 'inline-block', marginRight: '1em'};

const PlayerSelect = (props) => {
  const { selected } = props;

  return (
    <div className="player-select">
      <div 
        className={`btn ${selected === 'X' ? 'active' : ''}`}
        style={styles} 
        onClick={() => props.onClick("X")}
      >
        X
      </div>
      <div 
      className={`btn ${selected === 'O' ? 'active' : ''}`}
        style={styles} 
        onClick={() => props.onClick("O")}
      >
        O
      </div>
    </div>
  );
}

export default PlayerSelect;