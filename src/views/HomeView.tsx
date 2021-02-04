import React, { useState } from "react";
import '../shared/css/Global.css'

export const HomeView = () => {
  const [number, setNumber] = useState(0);

  /*   useEffect(
    () => {
      // Vad som sker när sidan laddas
      alert("Woho!");
      return () => {
        // Vad som sker när man lämnar sidan
        alert("I'm leaving you..");
      };
    }, // När detta ändras, ladda om funktionen
    []
  ); */

  return (
    <div className="body">
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Incrementation</button><br />
      <button disabled={number < 2} onClick={() => setNumber(number - 1)}>Decrementation</button><br />
      <button disabled={number === 0} onClick={() => setNumber(0)}>Reset</button><br />
      <button disabled={number != 3} onClick={() => alert('3 is the magic number!')}>Magic!</button>
    </div>
  );
};
