# Express + TypeScript: Configuración desde Cero

Este documento explica paso a paso cómo configurar un proyecto con Express y TypeScript desde cero.

## Paso 1: Inicializar el Proyecto

1. Abre una terminal y crea una nueva carpeta para tu proyecto:
   ```sh
   mkdir mi-proyecto-express && cd mi-proyecto-express
   ```

2. Inicializa un nuevo proyecto con `pnpm`:
   ```sh
   pnpm init
   ```

3. Instala las dependencias necesarias:
   ```sh
   pnpm add express dotenv mongoose google-auth-library
   ```

4. Instala las dependencias de desarrollo:
   ```sh
   pnpm add -D typescript @types/node @types/express ts-node
   ```

## Paso 2: Configurar TypeScript

1. Inicializa un archivo `tsconfig.json` con:
   ```sh
   pnpm exec tsc --init
   ```

2. Modifica el archivo `tsconfig.json` para asegurarte de incluir las siguientes configuraciones clave:
   ```json
   {
     "compilerOptions": {
       "target": "ES6",
       "module": "CommonJS",
       "outDir": "dist",
       "rootDir": "src",
       "strict": true
     }
   }
   ```

## Paso 3: Crear la Estructura del Proyecto

Crea la siguiente estructura de carpetas y archivos:

```
mi-proyecto-express/
│── src/
│   ├── index.ts
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│── .env
│── .gitignore
│── tsconfig.json
│── package.json
│── pnpm-lock.yaml
```

## Paso 4: Crear el Servidor Express

Edita el archivo `src/index.ts` y agrega el siguiente código base:

```ts
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, Express con TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

## Paso 5: Agregar Scripts al `package.json`

En tu archivo `package.json`, agrega los siguientes scripts:

```json
"scripts": {
  "dev": "ts-node src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

## Paso 6: Ejecutar el Proyecto

Para correr el servidor en modo desarrollo, usa:
```sh
pnpm dev
```

Para compilar el proyecto:
```sh
pnpm build
```

Para ejecutar el proyecto compilado:
```sh
pnpm start
```

## Paso 7: Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y define variables como:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mi-base-de-datos
```

## Paso 8: Conectar con MongoDB

Ejemplo de conexión a MongoDB en `src/config/db.ts`:

```ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error conectando a MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
```

En `src/index.ts`, importa y ejecuta `connectDB()` antes de iniciar el servidor.

Para agregar Swagger a un proyecto de Express con TypeScript, puedes seguir estos pasos:

1. **Instala las dependencias necesarias**:
   Abre tu terminal y ejecuta los siguientes comandos para instalar `swagger-ui-express` y `swagger-jsdoc`:

   ```bash
   npm install swagger-ui-express swagger-jsdoc
   ```

2. **Configura Swagger en tu proyecto**:
   Crea un archivo `swagger.ts` para configurar Swagger. Por ejemplo:

   ```typescript
   // filepath: /path/to/swagger.ts
   import swaggerJSDoc from 'swagger-jsdoc';
   import swaggerUi from 'swagger-ui-express';
   import { Express } from 'express';

   const options = {
       definition: {
           openapi: '3.0.0',
           info: {
               title: 'My API',
               version: '1.0.0',
           },
       },
       apis: ['./src/routes/*.ts'], // Ruta a tus archivos de rutas
   };

   const swaggerSpec = swaggerJSDoc(options);

   export const setupSwagger = (app: Express) => {
       app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
   };
   ```

3. **Integra Swagger en tu aplicación Express**:
   Modifica tu archivo principal de la aplicación (por ejemplo, `app.ts` o `index.ts`) para usar la configuración de Swagger:

   ```typescript
   // filepath: /path/to/app.ts
   import express from 'express';
   import { setupSwagger } from './swagger';

   const app = express();

   // ...existing middleware and routes...

   // Setup Swagger
   setupSwagger(app);

   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

4. **Documenta tus endpoints**:
   Agrega comentarios JSDoc en tus archivos de rutas para documentar tus endpoints. Por ejemplo:

   ```typescript
   // filepath: /path/to/src/routes/example.ts
   import { Router, Request, Response } from 'express';

   const router = Router();

   /**
    * @swagger
    * /example:
    *   get:
    *     summary: Example endpoint
    *     responses:
    *       200:
    *         description: A successful response
    */
   router.get('/example', (req: Request, res: Response) => {
       res.send('This is an example endpoint');
   });

   export default router;
   ```

5. **Ejecuta tu aplicación**:
   Ejecuta tu aplicación y navega a `http://localhost:<puerto>/api-docs` para ver la documentación generada por Swagger.



Estos pasos te permitirán agregar Swagger a tu proyecto de Express con TypeScript y generar documentación interactiva para tu API.
Instala las dependencias necesarias: Abre tu terminal y ejecuta los siguientes comandos para instalar swagger-ui-express y swagger-jsdoc:

  ```sh
    pnpm add -D @types/swagger-ui-express @types/swagger-jsdoc && pnpm add swagger-ui-express swagger-jsdoc
   ```

## Conclusión

Con estos pasos, has configurado un proyecto Express con TypeScript, soporte para variables de entorno y conexión a MongoDB. Puedes seguir expandiendo el proyecto añadiendo rutas, controladores y modelos según sea necesario.

