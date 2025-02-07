import { Collection } from "@/constants";
import mongoose, { Schema } from "mongoose";
 // Importamos una constante que representa el nombre de una colección en MongoDB.

// Definimos una función llamada getModel que recibe un nombre de colección y un esquema (schema).
export const getModel = (collectionName: Collection, schema: Schema) => {
  // Utilizamos el método mongoose.model para crear un modelo de datos.
  // Esto asocia un nombre de colección y un esquema, permitiendo interactuar con la base de datos.
  return mongoose.model(collectionName, schema);
};