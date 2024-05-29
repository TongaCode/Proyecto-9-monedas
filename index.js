const express = require("express");
const { balanza } = require("./balanza");
const { elejir } = require("./elejir");
const { comoJugar } = require("./comoJugar")
const app = express();
const port = 3000;

app.use(express.json());

app.post("/primerPesaje", (req, res) => {
  balanza(req, res);
});

app.post("/segundoPesaje", (req, res) => {

});

app.post("/elejir", (req, res) => {
  elejir(req, res);
});

app.get("/comoJugar", (req, res) => {
  res.send(comoJugar)
});

app.listen(port, () => {
  console.log(`Server online en el puerto ${port}`);
});
