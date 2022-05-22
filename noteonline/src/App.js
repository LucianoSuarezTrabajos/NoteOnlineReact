import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AgregarNota from "./components/AgregarNota";
import ListarNotas from "./components/ListarNota";
import "./App.css";

function App() {
  const [notaId, setNotasId] = useState("");

  const leerNotaId = (id) => {
    console.log("EL ID de nota a editar es: ", id);
    setNotasId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">
            Usando Firebase para almacenar notas
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AgregarNota id={notaId} setBookId={setNotasId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ListarNotas leerNotaId={leerNotaId} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
