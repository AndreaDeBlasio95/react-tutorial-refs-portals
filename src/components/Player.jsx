import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  //const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  //const [submitted, setSubmitted] = useState(false);

  function handleClick() {
    // playerName.current.value is the value of the input field
    // playerName.current is the input field itself
    // playerName is the ref object
    // ref object is used to access the original DOM element, like in this case input field
    //setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      // If enteredPlayerName is not null, then display the enteredPlayerName
      <h2>
        Welcome{" "}
        {playerName.current ? playerName.current.value : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
