export default function GameBoard({ onEveryTurn, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((element, elementIndex) => (
              <li key={elementIndex}>
                <button onClick={() => onEveryTurn(rowIndex, elementIndex)} disabled={element}>
                  {element}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
