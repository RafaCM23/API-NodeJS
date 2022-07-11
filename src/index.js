import connectDB from '#Config/db.js';
import '#Config/env.js';
import httpServer from '#Config/http.js';

const init = async () => {
    await connectDB(process.env.MONGO_URL); //Conexion asincrona con la BBDD

    httpServer.listen(process.env.PORT, () => {
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
    });
};

init();
