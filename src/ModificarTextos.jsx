import React, { useState } from "react";

const ModificarTextos = () => {
  const [texto1, setTexto1] = useState("Texto 1");
  const [texto2, setTexto2] = useState("Texto 2");
  const [texto3, setTexto3] = useState("Texto 3");

  return (
    <div>
      <h1>{texto1}</h1>
      <h1>{texto2}</h1>
      <h1>{texto3}</h1>
      <button onClick={() => setTexto1("Texto Modificado 1")}>
        Modificar Texto 1
      </button>
    </div>
  );
};

export default ModificarTextos;
