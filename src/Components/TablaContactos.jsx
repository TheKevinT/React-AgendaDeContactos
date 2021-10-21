import React from "react";

const TablaContactos = ({ contactos = [], dispatch }) => {
 
  const _handleDelete = (id) => {
    const actionDelete = {
      type:"delete",
      payload: id
    }
    dispatch(actionDelete)
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Número</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => {
            const showId = contacto.id.split("-");
            return (
              <tr key={contacto.id}>
                <td>{showId[0]}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => _handleDelete(contacto.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TablaContactos;
