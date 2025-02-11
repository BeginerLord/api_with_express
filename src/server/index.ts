import app from "@/config/app";
import { HOST, PORT } from "@/constants";

const startServer = () => {
    app.listen(PORT, HOST, () => {
      console.log(`Server listening on ${HOST}:${PORT} -> http://localhost:${PORT}`);
      console.log('Press Ctrl + C to stop the server');
    });
  };
  
  startServer();