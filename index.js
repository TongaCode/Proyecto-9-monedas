const express = require("express");
const { balanzaPrimerPesaje } = require("./primerPesaje");
const { balanzaSegundoPesaje } = require("./segundoPesaje");
const { elejir } = require("./elejir");
const { texto } = require("./comoJugar");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/comoJugar", (req, res) => {
  res.send(texto)
});

app.post("/primerPesaje", (req, res) => {
  balanzaPrimerPesaje(req, res);
});

app.post("/segundoPesaje", (req, res) => {
  balanzaSegundoPesaje(req, res);
});

app.post("/elejir", (req, res) => {
  elejir(req, res);
});


app.listen(port, () => {
  console.log(`Server online en el puerto ${port}`);
});
