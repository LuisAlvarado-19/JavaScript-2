let numero = 4591;


let inversoNum = (numero) => {
    
    let unidades = numero % 10;
    let decenas = parseInt((numero % 100) / 10);
    let centenas = parseInt((numero % 1000) / 100);
    let unidadesM = parseInt((numero % 10000) / 1000);


    let volteado = parseInt(""+unidades+decenas+centenas+unidadesM);
    return volteado;

}

let resultado = inversoNum(numero);

console.log(resultado);