import React from 'react';

function Cell ({ letter, status }) {
  return (
    <span className={`cell ${status}`}>{letter}</span>
  )
}

export default Cell;
