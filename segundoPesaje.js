const { monedas } = require("./primerPesaje");

function balanzaSegundoPesaje(req, res) {
    let sumaLadoA = 0;
    let sumaLadoB = 0;
    let numerosRepetidos = false;

    // Validar LadoA y ladoB
    try {
        if (!req.body.ladoA || !req.body.ladoB) {
            throw new Error("El JSON está vacío, no se proporcionaron datos.");
        };

        if (!Array.isArray(req.body.ladoA)) {
            throw new Error("El lado A solo puede ser un array.");
        } else if (!Array.isArray(req.body.ladoB)) {
            throw new Error("El lado B Solo puede ser un array.");
        };

        //Mapear LadoA
        const ladoA = req.body.ladoA.map((clave) => {
            if (typeof clave !== "number") {
                throw new Error(`Los datos tipo "${typeof req.body.ladoA}" del lado A no son validos, solo puede ingresar numeros.`);
            } else if (!monedas.hasOwnProperty(clave)) {
                throw new Error("Lado A, solo puede ingresar numeros del 1 al 9.");
            };
            return monedas[clave];
        });

        // Validar y mapear ladoB
        const ladoB = req.body.ladoB.map((clave) => {
            if (typeof clave !== "number") {
                throw new Error("Los datos del lado B no son validos, solo puede ingresar numeros.");
            } else if (!monedas.hasOwnProperty(clave)) {
                throw new Error("Lado B, solo puede ingresar numeros del 1 al 9.");
            };
            return monedas[clave];
        });

        //Verificacion de balanza vacia
        if (req.body.ladoA.length + req.body.ladoB.length === 0) {
            return res
                .status(200)
                .send("Balanza perfectamente equilibrada, ingrese las monedas para comenzar a pesar.");
        };

        // Verificar números repetidos
        const setLadoA = new Set(req.body.ladoA);
        const setLadoB = new Set(req.body.ladoB);

        for (let num of setLadoA) {
            if (setLadoB.has(num)) {
                numerosRepetidos = true;
                break;
            };
        };
        //Verificar si hay numeros repetidos
        if (numerosRepetidos) {
            throw new Error("Se encontraron números repetidos, no puedes repetir los números");
        };


        // Sumar valores de ladoA y ladoB
        sumaLadoA = ladoA.reduce((acc, val) => acc + val, 0);
        sumaLadoB = ladoB.reduce((acc, val) => acc + val, 0);

        // Comparar y responder
        if (sumaLadoA > sumaLadoB) {
            return res.send("El lado A es más pesado");
        } else if (sumaLadoA < sumaLadoB) {
            return res.send("El lado B es más pesado");
        } else {
            return res.send("El lado A y lado B son iguales");
        };
    } catch (error) {
        return res
            .status(400)
            .send(error.message);
    };
};

console.log(monedas)


module.exports = { balanzaSegundoPesaje }