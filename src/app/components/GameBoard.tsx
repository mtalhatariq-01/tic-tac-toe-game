"use client";
import { useState } from "react";

type Player = "X" | "O" | null;

const GameBoard: React.FC = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    const squaresCopy = [...squares];
    if (squaresCopy[index] || calculateWinner(squares)) return;

    const clickSound = new Audio("/sound/click.wav");
    clickSound.play();

    squaresCopy[index] = isXNext ? "X" : "O";
    setSquares(squaresCopy);
    setIsXNext(!isXNext);

    const winner = calculateWinner(squaresCopy);
    if (winner) {
      const winSound = new Audio("/sound/win.wav");
      winSound.play();
    }
  };

  const renderSquare = (index: number) => {
    return (
      <button
        onClick={() => handleClick(index)}
        className={`w-20 h-20 bg-transparent text-white text-4xl flex items-center justify-center border border-red m-2 shadow-md shadow-red transition-all duration-300 transform ${
          squares[index] ? "scale-125" : "hover:scale-110"
        }`}
        style={{ color: squares[index] === "X" ? "red" : "white" }}
      >
        {squares[index]}
      </button>
    );
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div
        className={`text-red text-2xl font-bold mb-5 transition-opacity duration-700 ${
          winner ? "opacity-100 animate-pulse text-3xl" : "opacity-50"
        }`}
      >
        {status}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
      </div>
      <button
        onClick={() => setSquares(Array(9).fill(null))}
        className="mt-5 px-4 py-2 bg-red text-white rounded transition-transform transform hover:scale-105 active:scale-95 duration-300"
      >
        Restart Game
      </button>
    </div>
  );
};

// Helper function to determine the winner
const calculateWinner = (squares: Player[]): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default GameBoard;
