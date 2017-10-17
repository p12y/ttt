import React from 'react';

const Cell = (props) => {
  return (
    <td><div className="cellPad">{props.value}</div></td>
  );
}

export default Cell;