import React from "react";

const FormularioAdd = ({dispatch}) => {

  const actionAdd={
    type:"add",
    payload: {
      id:1234,
      nombre: "nuevo",
      numero: "0928723423"
    }
  }

  const _handleAdd = (e) =>{
    e.preventDefault()
    dispatch(actionAdd)
  }

  return (
    <>
      <form>
        <div className="container">
          <div className="mb-3">
            <label className="form-label mx-1 d-grid gap-2">Nombre</label>
            <input type="text" className="form-control" autoComplete="off" />
          </div>
          <div className="mb-3">
            <label className="form-label mx-1 d-grid gap-2">Número</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mx-1 d-grid gap-2">
            <button onClick={_handleAdd} type="submit" className="btn btn-success mb-3">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormularioAdd;
