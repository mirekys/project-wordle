import React from 'react';
import { checkGuess } from '../../game-helpers'
import { range } from '../../utils';
import { Answer } from '../../context';
import Cell from './Cell';

function Guess ({ value }) {
  const answer = React.useContext(Answer)
  const checkedValue = checkGuess(value, answer) || range(0, 5).map(num => ({ letter: "", status: "" }))

  return (
    <p className="guess">
      {checkedValue.map(({ letter, status }, index) =>
        <Cell key={index} status={status} letter={letter} />
      )}
    </p >
  )
}

export default Guess;
