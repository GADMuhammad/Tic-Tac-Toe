export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.element}`}>
            Player {turn.player} — Row {turn.square.row + 1} — Element {turn.square.element + 1}
          </li>
        );
      })}
    </ol>
  );
}
