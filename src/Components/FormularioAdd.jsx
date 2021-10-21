import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ dispatch }) => {
  const [data, setData] = useState({
    nombre: "",
    numero: "",
  });
  const { nombre, numero } = data;
  const _handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      numero,
    },
  };

  const _handleAdd = (e) => {
    e.preventDefault();
    dispatch(actionAdd);
    setData({
      nombre:'',
      numero:''
    })
  };

  return (
    <>
      <form onSubmit={_handleAdd}>
        <div className="container">
          <div className="mb-3">
            <label className="form-label mx-1 d-grid gap-2">Nombre</label>
            <input
              name="nombre"
              value={nombre}
              onChange={_handleChange}
              type="text"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label mx-1 d-grid gap-2">Número</label>
            <input
              name="numero"
              value={numero}
              onChange={_handleChange}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mx-1 d-grid gap-2">
            <button type="submit" className="btn btn-success mb-3">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormularioAdd;
