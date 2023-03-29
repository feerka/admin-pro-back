require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

<<<<<<< HEAD
// Lectura y parseo del body
app.use( express.json() );

=======
>>>>>>> 34479fa30d37f93b981dc087c1668d310b928c9a
// Base de datos
dbConnection();


// Rutas
<<<<<<< HEAD
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );

=======
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });

});
>>>>>>> 34479fa30d37f93b981dc087c1668d310b928c9a


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});

