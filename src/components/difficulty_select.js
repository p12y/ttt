import React from 'react';

const styles = {display: 'inline-block'};

const DifficultySelect = (props) => {
  const { selected } = props;

  return (
    <div className="difficulty-select">
      <div 
        style={styles} 
        className={`btn ${selected === 'easy' ? 'active' : ''}`}
        onClick={() => props.onClick("easy")}
      >
        Easy
      </div>
      <div 
        style={styles} 
        className={`btn ${selected === 'medium' ? 'active' : ''}`}
        onClick={() => props.onClick("medium")}
      >
        Medium
      </div>
      <div 
        style={styles} 
        className={`btn ${selected === 'hard' ? 'active' : ''}`}
        onClick={() => props.onClick("hard")}
      >
        Hard
      </div>
    </div>
  );
}

export default DifficultySelect;