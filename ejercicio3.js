let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function paresImpar(array) {

    let i = 0;
    let par = 0;
    let impar = 0;
    while (array[i] != undefined) {

        if (array[i] % 2 == 0) {
            par++;
        } else {
            impar++;
        }

        i++;

    }
    let resultado = [par, impar]
    return resultado
};

let resultado = paresImpar(nums);

console.log(`La cantidad de pares es: ${resultado[0]}, la cantidad de impares es: ${resultado[1]}`);