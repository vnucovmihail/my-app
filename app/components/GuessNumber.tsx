"use client";

import { useState } from "react";
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ElderlyIcon from '@mui/icons-material/Elderly';
import CasinoIcon from '@mui/icons-material/Casino';
import ExploreIcon from '@mui/icons-material/Explore';

type Difficulty = "easy" | "medium" | "hard";

const ranges = {
  easy: 50,
  medium: 100,
  hard: 500,
};

export default function GuessNumber() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [secret, setSecret] = useState(generateNumber("medium"));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Choose number and start the game!");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function generateNumber(level: Difficulty) {
    return Math.floor(Math.random() * ranges[level]) + 1;
  }

  const startNewGame = (level: Difficulty) => {
    setDifficulty(level);
    setSecret(generateNumber(level));
    setGuess("");
    setMessage(`Guess the number from 1 to ${ranges[level]}`);
    setAttempts(0);
    setGameOver(false);
  };

  const handleGuess = () => {
    const userNumber = Number(guess);

    if (!userNumber) {
      setMessage("Write valid number, you!");
      return;
    }

    setAttempts(prev => prev + 1);

    if (userNumber === secret) {
      setMessage(`🎉 Excellent! You are going great! ${secret}`);
      setGameOver(true);
    } else if (userNumber > secret) {
      setMessage("⬇️ Less");
    } else {
      setMessage("⬆️ More");
    }

    setGuess("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px"}}>
      <h2><ExploreIcon fontSize="small" /> Guess number</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => startNewGame("easy")}>
          <AssistWalkerIcon fontSize="small" /> For pink dressed crybabies. (1–50)
        </button>
        <button onClick={() => startNewGame("medium")} style={{ marginLeft: "10px" }}>
           <DirectionsWalkIcon fontSize="small" /> We can handle this! (1–100)
        </button>
        <button onClick={() => startNewGame("hard")} style={{ marginLeft: "10px" }}>
          <ElderlyIcon fontSize="small" /> What the hell is going on?! (1–500)
        </button>
      </div>

      <p>{message}</p>
      <p>Attempts: {attempts}</p>

      {!gameOver && (
        <>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder={`1 - ${ranges[difficulty]}`}
          />
          <button onClick={handleGuess} style={{ marginLeft: "10px" }}>
            Check
          </button>
        </>
      )}

      {gameOver && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => startNewGame(difficulty)}>
            <CasinoIcon fontSize="small" /> Play again
          </button>
        </div>
      )}
    </div>
  );
}