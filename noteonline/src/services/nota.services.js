import { db } from "../firebase-config";
// importa la base de datos que trae de firebase
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
const notaCollectionRef = collection(db, "nota");

// Class que maneja el CRUD de notas
class ServicioDatoNota {
  //  Agreagar una nota
  agregarNotas = (nuevaNota) => {
    return addDoc(notaCollectionRef, nuevaNota);
  };
  // Actualizar notas
  actualizarNota = (id, actualizarNota) => {
    const notaDoc = doc(db, "notas", id);
    return updateDoc(notaDoc, actualizarNota);
  };

  // Eliminar una nota recibiendo su id como parametro
  deleteNota = (id) => {
    const notaDoc = doc(db, "notas", id);
    return deleteDoc(notaDoc);
  };

  // Leer todas las notas
  leerNotas = () => {
    return getDocs(notaCollectionRef);
  };

  // Leer una nota en especifico por id
  leerNota = (id) => {
    const notaDoc = doc(db, "notas", id);
    return getDoc(notaDoc);
  };
}
export default new ServicioDatoNota();
