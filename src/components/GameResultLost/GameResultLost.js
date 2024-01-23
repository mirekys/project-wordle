import React from 'react';
import { Answer } from '../../context';

function GameResultLost () {
  const answer = React.useContext(Answer)

  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>;
}

export default GameResultLost;
