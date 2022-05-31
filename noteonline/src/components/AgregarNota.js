import React, { useState, useEffect } from "react";
import {
  Form,
  Alert,
  InputGroup,
  Button,
  ButtonGroup,
  FormControl,
} from "react-bootstrap";
import ServicioDatoNota from "../services/nota.services";

const AgregarNota = ({ id, setNotaId }) => {
  // Incializando estados
  const [titulo, setTitulo] = useState("");
  const [cuerpo, setCuerpo] = useState("");
  const [estado, setEstado] = useState(true);
  const [flag, setFlag] = useState(true);
  const [mensaje, setMensaje] = useState({ error: false, msg: "" });

  // Manejo del envio de la nota
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    if (titulo === "" || cuerpo === "") {
      setMensaje({
        error: true,
        msg: "El titulo o el cuerpo de la nota esta vacio!",
      });
      return;
    }
    const nuevaNota = {
      titulo,
      cuerpo,
      estado,
    };
    //   Control de la nota por consola
    console.log(nuevaNota);

    // En caso de que el Id de la nota exista se va a actualizar
    // de lo contrario se va a agregar en la lista de notas
    // Utilizando Try/Catch para el manejo de errores
    try {
      if (id !== undefined && id !== "") {
        await ServicioDatoNota.actualizarNota(id, nuevaNota);
        setNotaId("");
        setMensaje({
          error: false,
          msg: "La nota se actualizo de forma correcta",
        });
      } else {
        await ServicioDatoNota.agregarNota(nuevaNota);
        setMensaje({ error: false, msg: "Se agrego la nota de forma exitosa" });
      }
    } catch (err) {
      setMensaje({ error: true, msg: err.mensaje });
    }
    setTitulo("");
    setCuerpo("");
  };

  const editarNota = async () => {
    setMensaje("");
    try {
      const docNota = await ServicioDatoNota.leerNota(id);
      console.log("lo que se va a guardar es: ", docNota.data());
      // Seteando estados con datos
      setTitulo(docNota.data().titulo);
      setCuerpo(docNota.data().cuerpo);
      setEstado(docNota.data().estado);
    } catch (err) {
      setMensaje({ error: true, msg: err.mensaje });
    }
  };

  useEffect(() => {
    console.log("El id es: ", id); // muestro el id
    if (id !== undefined && id !== "") {
      editarNota();
    }
    //eslint-disable-next-line
  }, [id]);
  return (
    <>
      <div className="p-4 box text-center">
        {mensaje?.msg && (
          // alerta con React-Boostrap
          <Alert
            variant={mensaje?.error ? "danger" : "success"}
            dismissible // habilita la funcion de cerrar la notificacion
            onClose={() => setMensaje("")} // al cerrar el msg se vacia
          >
            {mensaje?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          {/* TITULO DE NOTA */}
          <Form.Group className="mb-3" controlId="formTituloNota">
            <InputGroup>
              <InputGroup.Text id="formTituloNota">Titulo</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Ingrese el titulo de nota"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          {/* CUERPO DE  NOTA */}
          <Form.Group className="mb-2" controlId="formCuerpoNota">
            <InputGroup>
              <InputGroup.Text id="formCuerpoNota">Nota</InputGroup.Text>

              <Form.Control
                as="textarea"
                aria-label="With textarea"
                type="text"
                placeholder="Ingrese la descripcion de la notas aquí..."
                value={cuerpo}
                onChange={(e) => setCuerpo(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" size="mb" className="mb-3">
            <Button
              size="lg"
              disabled={flag}
              variant="danger"
              onClick={(e) => {
                setEstado("Sin Completar");
                setFlag(true);
              }}
            >
              Sin completar
            </Button>
            <Button
              size="lg"
              variant="success"
              disabled={!flag}
              onClick={(e) => {
                setEstado("Completado");
                setFlag(false);
              }}
            >
              Completado
            </Button>
          </ButtonGroup>
          <div className="text-center bd-example d-grid gap-2">
            <Button variant="primary" type="Submit" size="mb">
              Agregar o Actualizar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AgregarNota;
