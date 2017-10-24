import React from 'react';

const Cell = (props) => {
  return (
    <div className={`cell ${props.className}`} onClick={() => props.onClick(props.index)}>
      <div>{props.value}</div>
    </div>
  );
}

export default Cell;