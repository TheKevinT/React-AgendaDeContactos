import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../Reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

const init = () => {
  const infoContactos = localStorage.getItem("contactos");

  return infoContactos ? JSON.parse(infoContactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formWiew, setFormWiew] = useState(false);
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <button
              type="button"
              onClick={() => setFormWiew(!formWiew)}
              className="btn btn-warning"
            >
              {!formWiew ? "Ver Formulario" : "Ocultar Formulario"}
            </button>
          </div>
          <div className="col">
            {formWiew && <FormularioAdd dispatch={dispatch} />}
          </div>
        </div>

        <TablaContactos contactos={state} dispatch={dispatch} />
      </div>
    </>
  );
};

export default Contactos;
