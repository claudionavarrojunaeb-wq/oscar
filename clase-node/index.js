import express from 'express';
import { alumnos } from './routes/alumnosRouter.js';
const server = express();
server.use(express.json()); // Middleware para parsear JSON
server.use('/alumnos', alumnos)
server.all('/', (req, res) => {
    res.status(404).json({
        mensaje: 'Ruta no encontrada'
    })
});
// Iniciar servidor
server.listen(3000, () => {
    console.log('🚀 Servidor en http://localhost:3000');
});