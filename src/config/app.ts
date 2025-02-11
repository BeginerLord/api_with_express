import { errorGlobalHandler } from "@/utils/errors";
import dotenv from "dotenv";
import express from "express";
import { handleNotFound } from "./routes";
import router from "./routes/routes";
import { setHeaders } from "./headers";
import { URL_DATABASE } from "@/constants";
import { corsConfig } from "./cors";
import { initDataSources } from "./database";

dotenv.config();

const app = express();

// Coneccion a la base de datos
// Inicialización de fuentes de datos
(async () => {
  await initDataSources({
    mongoose: { mongoUrl: URL_DATABASE },
    // postgres: { connectionString: POSTGRES_CONNECTION_STRING },
    // redis: { url: REDIS_URL }
  });
})();

// Analiza cuerpos de solicitudes con datos codificados en URL (application/x-www-form-urlencoded)
// 'limit' establece el tamaño máximo del cuerpo de la solicitud a 1MB
// 'extended: true' permite analizar objetos anidados y matrices utilizando la biblioteca 'qs'
app.use(express.json());
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.use(setHeaders);
app.use(corsConfig());

// Middleware global para manejo de errores
app.use(errorGlobalHandler);

app.disable("x-powered-by");

// Rutes
app.use("/api/v1", router);
app.use("*", handleNotFound);

export default app;
