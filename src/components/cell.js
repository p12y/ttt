import React from 'react';

const Cell = (props) => {
  return (
    <td onClick={() => props.onClick(props.index)}>
      <div className="cellPad">{props.value}</div>
    </td>
  );
}

export default Cell;