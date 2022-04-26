import React, {useState} from 'react'

// Desarrollar en React un contador usando useState, con un boton incremente el valor y con otro lo resetee.

export function Contador() {
    const [count,setCounter] = useState(0);
  
    const incrementarUno = () => setCounter(count+1);
    const incrementarDos = () => setCounter(count+2);
    const duplicar = () => setCounter(prevCounter => prevCounter*2);
      
    return (
      <div>
        <button onClick={() => incrementarUno()}>➕</button>
        <button onClick={() => incrementarDos()}>+2</button>
        <button onClick={() => duplicar()}>x2</button>
        <button onClick={() => setCounter(0)}>🗑</button>
        <h1>Cantidad de Clicks: {count}</h1>
      </div>
    );
}
