const express = require("express");
const app = express();
const session = require('express-session');

//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(session({
 
}));

//cargamos el archivo de rutas
app.use(require('./routes/transfer'));
//app.use(require('./routes/event'));

app.listen(process.env.PORT||3307,() => {
    console.log("Servidor corriendo en el puerto 3307");
});

module.exports = app;