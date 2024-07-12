export default function GameOver({ winner = "NOBODY", onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} WON !</p>
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
