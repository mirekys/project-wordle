import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults ({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) =>
        <Guess key={`${guess}-${index}`} value={guess} />
      )}
    </div >
  )
}

export default GuessResults;
