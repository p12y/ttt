import React from 'react';

const styles = {display: 'inline-block'};

const Cell = (props) => {
  return (
    <td onClick={() => props.onClick(props.index)}>
      <div style={styles}>{props.value}</div>
    </td>
  );
}

export default Cell;