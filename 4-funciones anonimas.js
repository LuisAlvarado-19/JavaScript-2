
sumatoria = (a, b) => {
    let total = a + b;
    return total;
}

let sumatoriaAnonima = function (a, b){
    let total = a + b;
    return total;
}

let ejecutarFuncion = function (f, valor1 ,valor2) {
    let resultado = f(valor1, valor2);
    return resultado;
}

let sumatoriaAnonimaAuto = (function(a, b){
    let total = a + b;
    return total;

})(5, 5);

sumatoriaflecha = (a, b) => {
    total = a + b;
    return total;
}
sumatoriaflechaAuto = ((a, b) => {
    total = a + b;
    return total;
})(5,5);



console.log(sumatoriaAnonimaAuto);
console.log(sumatoria(5, 5));
console.log(sumatoriaAnonima(5, 5));
console.log(ejecutarFuncion(sumatoriaAnonima, 5, 5));
console.log(sumatoriaflecha(5, 5));
console.log(sumatoriaflechaAuto);