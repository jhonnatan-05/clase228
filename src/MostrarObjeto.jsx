import React, { useState } from "react";

const MostrarObjeto = () => {
  const [mostrar, setMostrar] = useState(false);
  const objeto = { nombre: "jhonnatan", edad: 19 };

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar Datos</button>
      {mostrar && <p>{`Nombre: ${objeto.nombre}, Edad: ${objeto.edad}`}</p>}
    </div>
  );
};

export default MostrarObjeto;
