import React from 'react';

const DifficultySelect = (props) => (
  <div>
  <div onClick={() => props.onClick("easy")}>Easy</div>
  <div onClick={() => props.onClick("medium")}>Medium</div>
  <div onClick={() => props.onClick("hard")}>Hard</div>
</div>
)

export default DifficultySelect;