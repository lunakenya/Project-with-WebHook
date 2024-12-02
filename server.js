const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware para procesar JSON
app.use(bodyParser.json());

// Ruta principal del webhook
app.post("/webhook", (req, res) => {
    console.log("Evento recibido:", req.body);
    res.status(200).send("¡Evento recibido!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
