const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
    res.send('Nilda Boza');
});

app.get('/clientes', (req, res) => {
    res.send('Lista de clientes');
});

app.get('/productos', (req, res) => {
    res.send('Lista de productos');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});