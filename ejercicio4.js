let mes = 4;
let capital = 5000;
let interes = 0.05;


let calculoRendimiento = (mes, capital, interes) => {

    for(let i = 0; i < mes; i++){
        capital += (capital * interes);
    }

    return capital;

}

let ganancia = calculoRendimiento(mes, capital, interes) - capital;
console.log(`El monto al finalizar es el siguiente: ${calculoRendimiento(mes, capital, interes)}, 
lo que significa una ganancia de: ${ganancia}`);