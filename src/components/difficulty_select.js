import React from 'react';

const styles = {display: 'inline-block'};

const DifficultySelect = (props) => (
  <div>
  <div 
    style={styles} 
    onClick={() => props.onClick("easy")}
  >
    Easy
  </div>
  <div 
    style={styles} 
    onClick={() => props.onClick("medium")}
  >
    Medium
  </div>
  <div 
    style={styles} 
    onClick={() => props.onClick("hard")}
  >
    Hard
  </div>
</div>
)

export default DifficultySelect;