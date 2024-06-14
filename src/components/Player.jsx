import { useState, useRef } from "react";
export default function Player() {
  const [enterdPlayerName, setEnterdPlayerName] = useState(null);
  const playerName = useRef();
  function handleChange() {
    setEnterdPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
