import React, { useState } from "react";

const CambiarColor = () => {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => setColor("blue")}>Cambiar a Azul</button>
      <button onClick={() => setColor("green")}>Cambiar a Verde</button>
    </div>
  );
};

export default CambiarColor;
