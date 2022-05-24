import { bd } from "../firebase-config";
// importa la base de datos que trae de firebase
// Manejo de datos de firebase
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// IMPORTANTE Documentacion de FireBase:
// https://firebase.google.com/docs/firestore/data-model

// obtener referencias de documentos
const notaCollectionRef = collection(bd, "notes");

// maneja el CRUD de notas
class ServicioDatoNota {
  //  Agreagar una nota
  agregarNota = (nuevaNota) => {
    return addDoc(notaCollectionRef, nuevaNota);
  };
  // Actualizar notas
  actualizarNota = (id, actualizarNota) => {
    const notaDoc = doc(bd, "notes", id);
    return updateDoc(notaDoc, actualizarNota);
  };

  // Eliminar una nota recibiendo su id como parametro
  eliminarNota = (id) => {
    const notaDoc = doc(bd, "notes", id);
    return deleteDoc(notaDoc);
  };

  // Leer todas las notas
  leerNotas = () => {
    return getDocs(notaCollectionRef);
  };

  // Leer una nota en especifico por id
  leerNota = (id) => {
    const notaDoc = doc(bd, "notes", id);
    return getDoc(notaDoc);
  };
}
export default new ServicioDatoNota();
