import React, { useState } from "react";

const ValidarNumero = () => {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <input type="number" onChange={(e) => setNumero(e.target.value)} />
      <p>
        {numero > 10 ? "El número es mayor a 10" : "El número no es mayor a 10"}
      </p>
    </div>
  );
};

export default ValidarNumero;
