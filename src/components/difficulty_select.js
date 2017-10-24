import React from 'react';

const styles = {display: 'inline-block'};

const DifficultySelect = (props) => (
  <div className="difficulty-select">
    <div 
      style={styles} 
      className="btn active"
      onClick={() => props.onClick("easy")}
    >
      Easy
    </div>
    <div 
      style={styles} 
      className="btn"
      onClick={() => props.onClick("medium")}
    >
      Medium
    </div>
    <div 
      style={styles} 
      className="btn"
      onClick={() => props.onClick("hard")}
    >
      Hard
    </div>
  </div>
)

export default DifficultySelect;