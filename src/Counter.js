import React, { useState } from 'react';

const Counter = () => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
const [count, setCount] = useState(0);

const handleInputCount = (e) => {
    if (isNaN(e.target.value) === true) {
        return ;
    } else if (e.target.value === "") {
        setCount (0);
    } else {
        setCount (parseFloat(e.target.value));
    }
}

  return (
    <>
        <label for="input-field">Rentre la valeur de ton choix!</label>
        <input name="input-field" value={count}  onChange={handleInputCount}></input>
        <div>
        <p>Le compteur est  à : {count} </p>
        <button onClick={() => setCount(count + 1)}>
            +1
        </button>
        <button onClick={() => setCount(count - 1)}>
            -1
        </button>
        </div>
    </>
  );
}

export default Counter