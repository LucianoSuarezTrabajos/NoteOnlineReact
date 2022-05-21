import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import NoteDataService from "../services/note.services";

const AgregarNotas = ({ id, setNoteId }) => {
  useState[(titulo, setTitulo)] = useState("");
  useState[(cuerpo, setCuerpo)] = useState("");
  useState[(estado, setEstado)] = useState(true);
  useState[(mensaje, setMensaje)] = useState({ error: false, msg: "" });

    const handleSubmit = async(e) => {
        e.preventDefault()
        setMensaje("")
        if (titulo==="" || cuerpo==="" ) {
            setMensaje({ error: true, msg:"El titulo o el cuerpo de la nota esta vacio!"})
            return;
          }
          const nuevaNota = {
              titulo,
              cuerpo,
              estado,
          };
        //   Control de la nota por consola
          console.log(nuevaNota)

          // Manejo de error con try/catch
        // de manera asyc usando awaint... 

          try {
              if ( id!== undefined && id !== "") {
                await 
              }
          }
    } 

};
