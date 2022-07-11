import expressApp from '#Config/express.js';
import { createServer } from 'http';

const httpServer = createServer(expressApp); 
//Creamos el servidor Http y le pasamos express, que va a ser quien procese las solitudes

export default httpServer;
