//Funcion para desordenar los valores dell objeto y cada vez sea distinto

function desordenarValores(obj) {
    // Extraer los valores del objeto en un array
    const valores = Object.values(obj);

    // Función para desordenar el array (algoritmo de Fisher-Yates)
    for (let i = valores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valores[i], valores[j]] = [valores[j], valores[i]];
    }

    // Reasignar los valores desordenados a las claves del objeto
    Object.keys(obj).forEach((key, index) => {
        obj[key] = valores[index];
    });
};

module.exports = { desordenarValores }