import React, { useState } from "react";

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
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Incrementation</button>
    </div>
  );
};
