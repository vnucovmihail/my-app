"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import CasinoIcon from "@mui/icons-material/Casino";

type Difficulty = "easy" | "medium" | "hard";

const ranges = {
  easy: 50,
  medium: 100,
  hard: 500,
};

export default function GuessNumberB() {
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [secret, setSecret] = useState(generateNumber("medium"));
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Choose difficulty to start");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function generateNumber(level: Difficulty) {
    return Math.floor(Math.random() * ranges[level]) + 1;
  }

  const startNewGame = (level: Difficulty) => {
    setDifficulty(level);
    setSecret(generateNumber(level));
    setGuess("");
    setMessage(`Guess number from 1 to ${ranges[level]}`);
    setAttempts(0);
    setGameOver(false);
  };

  const handleGuess = () => {
    const userNumber = Number(guess);

    if (!userNumber) {
      setMessage("Enter valid number!");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (userNumber === secret) {
      setMessage(`🎉 Correct! Number was ${secret}`);
      setGameOver(true);
    } else if (userNumber > secret) {
      setMessage("⬇️ Lower");
    } else {
      setMessage("⬆️ Higher");
    }

    setGuess("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 6,
        mb: 6
      }}
    >
      <Card
        sx={{
          width: 420,
          borderRadius: 4,
          boxShadow: 6,
        }}
      >
        <CardContent>
          <Stack spacing={3} alignItems="center">

            <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ExploreIcon />
              Guess The Number
            </Typography>

            <ToggleButtonGroup
              exclusive
              value={difficulty}
              onChange={(e, value) => value && startNewGame(value)}
              size="small"
            >
              <ToggleButton value="easy">Easy</ToggleButton>
              <ToggleButton value="medium">Medium</ToggleButton>
              <ToggleButton value="hard">Hard</ToggleButton>
            </ToggleButtonGroup>

            <Typography color="text.secondary">
              Attempts: {attempts}
            </Typography>

            <Typography>{message}</Typography>

            {!gameOver && (
              <Stack direction="row" spacing={2}>
                <TextField
                  size="small"
                  type="number"
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder={`1 - ${ranges[difficulty]}`}
                />
                <Button
                  variant="contained"
                  onClick={handleGuess}
                >
                  Check
                </Button>
              </Stack>
            )}

            {gameOver && (
              <Button
                variant="contained"
                color="success"
                startIcon={<CasinoIcon />}
                onClick={() => startNewGame(difficulty)}
              >
                Play Again
              </Button>
            )}

          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}