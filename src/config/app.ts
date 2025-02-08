import { errorGlobalHandler } from "@/utils/errors";
import dotenv from "dotenv";
import express from "express";
import { handleNotFound } from "./routes";
import router from "./routes/routes";
import { setHeaders } from "./headers";
import { initMongoose } from "./database";
import { URL_DATABASE } from "@/constants";
import { corsConfig } from "./cors";

dotenv.config();

const app = express();

// Coneccion a la base de datos
(async () => {
    await initMongoose({ mongoUrl: URL_DATABASE});
  })();

app.use(express.json());
app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.use(setHeaders);
app.use(corsConfig());

// Middleware global para manejo de errores
app.use(errorGlobalHandler);

app.disable("x-powered-by");

// Rutes
app.use("/api", router);
app.use("*", handleNotFound);

export default app;