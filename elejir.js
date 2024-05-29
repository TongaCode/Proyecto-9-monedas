const { monedas } = require("./balanza.js");
let respuesta = 0;
function elejir(req, res) {


    // Validar LadoA y ladoB
    try {
        if (!req.body.elejir) {
            throw new Error("El JSON está vacío, no se proporcionaron datos.");
        };

        if (!Array.isArray(req.body.elejir)) {
            throw new Error("El lado A solo puede ser un array.");
        };

        if (req.body.elejir.length === 0) {
            throw new Error("Debes ingresar un numero");
        };

        //Mapear Elejir
        respuesta = req.body.elejir.map((clave) => {
            if (typeof clave !== "number") {
                throw new Error(`Los datos "${req.body.elejir}" no son validos, solo puede ingresar numeros.`);
            } else if (!monedas.hasOwnProperty(clave)) {
                throw new Error("Solo puede ingresr numeros del 1 al 9.");
            };

            monedas[clave];


            if (clave === monedas[2]) {
                return res.send(`Ganaste la moneda ${clave} es la mas pesada`);
            } else {
                return res.send(`Perdiste la moneda ${clave} no es la moneda mas pesada`);
            };
        });

    } catch (error) {
        return res
            .status(400)
            .send(error.message);
    };
};

module.exports = { elejir };