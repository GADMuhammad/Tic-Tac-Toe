import { useState } from "react";

export default function ({ initialName, symbol = "X", isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => setPlayerName(event.target.value);

  return (
    <li className={isActive ? "active" : null}>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            placeholder={playerName}
            value={playerName}
            required
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={() => {
          setIsEditing((previousValue) => !previousValue);
          {
            isEditing && onChangeName(symbol, playerName);
          }
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
