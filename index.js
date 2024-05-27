const express = require("express");
const { balanza } = require("./balanza");
const { elejir } = require("./elejir");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/jugar", (req, res) => {
  balanza(req, res);
});

app.post("/elejir", (req, res) => {
  elejir(req, res);
});

app.get("/comoJugar", (req, res) => {
  res.send("Tienes 9 monedas en total y con solo dos pesajes tienes que adivinar que moneda es la mas pesada, en jugar podras poner las monedas en la balanza, en elejir podras poner la moneda que te parece mas pesada para saber si ganaste o perdiste, suerte!!!");
});

app.listen(port, () => {
  console.log(`Server online en el puerto ${port}`);
});
