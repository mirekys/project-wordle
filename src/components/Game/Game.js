import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GameResultLost from '../GameResultLost/GameResultLost';
import GameResultWon from '../GameResultWon/GameResultWon';
import { range, sample } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED, GameStatus } from '../../constants';
import { WORDS } from '../../data';
import { Answer } from '../../context';
import { activeGuesses, checkGameResult } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game () {
  const [status, setStatus] = React.useState(GameStatus.ONGOING)
  const [guesses, setGuesses] = React.useState(range(0, NUM_OF_GUESSES_ALLOWED).map(() => ""));

  const gameResult = status === GameStatus.WON
    ? <GameResultWon numOfGuesses={activeGuesses(guesses)} />
    : status === GameStatus.LOST
      ? <GameResultLost />
      : undefined

  function handleNewGuess (guess) {
    const nextGuesses = [...guesses]
    const nextIndex = nextGuesses.findIndex(g => g === "")

    if (nextIndex > -1) {
      nextGuesses[nextIndex] = guess
    }

    const nextGameStatus = checkGameResult(nextGuesses, answer)
    if (status !== nextGameStatus) {
      setStatus(nextGameStatus)
    }
    setGuesses(nextGuesses)
  }

  return <>
    <Answer.Provider value={answer}>
      <GuessResults guesses={guesses} />
      {gameResult}
    </Answer.Provider>
    <GuessInput gameStatus={status} handleNewGuess={handleNewGuess} />
  </>;
}

export default Game;
