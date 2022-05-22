import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ServicioDatoNota from "../services/nota.services";

const ListarNotas = ({ leerNotaId }) => {
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    leerNotas();
  }, []);

  const leerNotas = async () => {
    const data = await ServicioDatoNota.leerNotas();
    // Del servicio traeme la notas desde Firebase
    console.log(data.docs);
    // Ver datos en consola
    // set de los datos al estado
    setNotas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // Eliminar nota pasando como parametro el id
  const eliminarNota = async (id) => {
    await ServicioDatoNota.eliminarNota(id);
    leerNotas();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={leerNotas}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Cuerpo de Nota</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {notas.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.titulo}</td>
                <td>{doc.cuerpo}</td>
                <td>{doc.estado}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => leerNotaId(doc.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => eliminarNota(doc.id)}
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListarNotas;
