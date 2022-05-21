import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
// import AgregarNota from "./components/agregar"
// import ListarNotas from "./components/listar"
import "./App.css";

function App() {
  const [notaId, setNotasId] = useState("");

  const getNotasIdHandle = (id) => {
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
            <AddBook id={notaId} setBookId={setNotasId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getNotasIdHandle} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
