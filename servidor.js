const express = require('express');
const app = express();
const port = 3000;
const productosRoutes = require('./routes/productos');

app.use('/', productosRoutes);
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});