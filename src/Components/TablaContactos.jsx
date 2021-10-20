import React from "react";

const TablaContactos = ({ contactos = [] }) => {
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
            return (
              <tr key={contacto.id}>
                <td>{contacto.id}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>
                  {" "}
                  <button type="button" className="btn btn-danger">
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
