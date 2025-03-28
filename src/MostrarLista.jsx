import React from "react";

const MostrarLista = () => {
  const lista = ["Elemento 1", "Elemento 2", "Elemento 3"];

  return (
    <ul>
      {lista.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default MostrarLista;
