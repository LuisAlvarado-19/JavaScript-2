let variableGlobal = 5;

miFuncion = () => {
    let variableLocal = 10;
    console.log(`La Variable global es: ${variableGlobal} y la variable local es: ${variableLocal}`);
}
// miFuncion();

let tiempo = 60;
let contador = 10;
imprimirMensaje = (valor, valor2) => {
// console.log(valor);
// console.log(valor2)
}
imprimirMensaje(tiempo, contador);
imprimirMensaje(100, 150);

// Una de las ventajas de utilizar funciones es que la podemos llamar "n" cantidad de veces y no necesariamente
// Con los mismos valores, como lo hacemos ver en el ejemplo anterior.

areaTriangulo = (base, altura) => {
    let area = (base * altura) / 2;
    return area;
}

let resultado = areaTriangulo (10, 20);
// console.log(resultado);


let a = 80;
let b = 5;
comparador  = (valor1, valor2) => {
let total = valor1 + valor2;
if(total > 100){
    return total;
}else{
    return 0;
}
}
resultado = comparador(a, b)
console.log(resultado)