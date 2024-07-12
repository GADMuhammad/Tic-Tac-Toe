import { useState } from "react";
import Control from "./Components/Control";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { INITIAL_GAME_BOARD, WINNING_COMBINATIONS } from "./GENERAL_CONSTANTS";
import GameOver from "./Components/GameOver";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") currentPlayer = "O";
  return currentPlayer;
};

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn,
      { row, element } = square;

    gameBoard[row][element] = player;
  }

  return gameBoard;
};

const driveWinner = (gameBoard, players) => {
  let winner;

  WINNING_COMBINATIONS.forEach((combination) => {
    const firstSquare = gameBoard[combination[0].row][combination[0].element],
      secondSquare = gameBoard[combination[1].row][combination[1].element],
      thirdSquare = gameBoard[combination[2].row][combination[2].element];

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare)
      winner = players[firstSquare];
  });

  return winner;
};

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" }),
    [gameTurns, setGameTurns] = useState([]),
    activePlayer = deriveActivePlayer(gameTurns),
    gameBoard = deriveGameBoard(gameTurns),
    winner = driveWinner(gameBoard, players),
    hasDraw = gameTurns.length === 9 && !winner;

  const handleEveryTurn = (rowIndex, elementIndex) => {
    setGameTurns((gameTurns) => {
      const currentPlayer = deriveActivePlayer(gameTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, element: elementIndex },
          player: currentPlayer,
        },
        ...gameTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Control
            initialName={players.X}
            isActive={activePlayer === "X"}
            onChangeName={(symbol, newName) =>
              setPlayers((players) => ({ ...players, [symbol]: newName }))
            }
          />
          <Control
            initialName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={(symbol, newName) =>
              setPlayers((players) => ({ ...players, [symbol]: newName }))
            }
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={() => setGameTurns([])} />}
        <GameBoard onEveryTurn={handleEveryTurn} board={gameBoard} />
        <button className="button" onClick={() => setGameTurns([])}>
          Restart!
        </button>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
