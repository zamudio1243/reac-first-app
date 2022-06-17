import React from "react";

const Arreglos = () => {
  const [numeros, setNumeros] = React.useState([1, 2, 3, 4]);
  let numeroActual = 5;
  const agregarNumero = () => {
    console.log("Diste click", numeroActual);
    numeroActual += 1;
    setNumeros([...numeros, numeroActual]);
  };

  return (
    <div>
      <ul>
        {numeros.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
      <button
        className="btn btn-dark"
        onClick={() => {
          agregarNumero();
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default Arreglos;
