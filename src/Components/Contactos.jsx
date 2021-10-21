import React, { useReducer } from "react";
import { ContactosReducer } from "../Reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

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
  {
    id: "11",
    nombre: "tt",
    numero: "09122348",
  },
];

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, contactos);
  return (
    <>
      <div className="container mt-3">
        <FormularioAdd dispatch={dispatch} />
        <TablaContactos contactos={state} dispatch={dispatch} />
      </div>
    </>
  );
};

export default Contactos;
