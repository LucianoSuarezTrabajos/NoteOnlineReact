import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AgregarNota from "./components/AgregarNota";
import ListarNotas from "./components/ListarNota";
import "./App.css";

function App() {
  const [notaId, setNotaId] = useState("");

  const leerNotaId = (id) => {
    console.log("EL ID de nota a editar es: ", id);
    setNotaId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Proyecto Notas en Firebase</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "800px" }}>
        <Row>
          <Col>
            <AgregarNota id={notaId} setNotaId={setNotaId} />
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
