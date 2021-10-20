import React from "react";
import TablaContactos from "./TablaContactos";

const Contactos = () => {
  const contactos = [
    {
      id: "asc123",
      nombre: "Kevin",
      numero: "09122348",
    },
    {
      id: "asc1pp76",
      nombre: "Kevin",
      numero: "09122348",
    },
    {
      id: "asc0asa23",
      nombre: "Kevin",
      numero: "09122348",
    },
  ];
  return (
    <>
      <div className="container mt-3">
        <TablaContactos contactos={contactos} />
      </div>
    </>
  );
};

export default Contactos;
