import React from 'react';

const PlayerSelect = (props) => (
  <div>
    <div>Select player:</div>
    <div onClick={() => props.onClick("X")}>X</div>
    <div onClick={() => props.onClick("O")}>O</div>
  </div>
)

export default PlayerSelect;