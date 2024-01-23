import React from "react";
import { GameStatus } from "../../constants";

function GuessInput ({ handleNewGuess, gameStatus }) {
    const [value, setValue] = React.useState([]);

    function handleSubmit (e) {
        e.preventDefault();
        setValue("");
        handleNewGuess(value)
    }


    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                value={value}
                disabled={gameStatus !== GameStatus.ONGOING}
                onChange={(e) => setValue(e.target.value.toUpperCase())}
                title="a 5-letter guess"
            />
        </form>
    );
};

export default GuessInput
