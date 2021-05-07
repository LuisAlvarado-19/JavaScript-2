let calificaciones = [9.9, 7, 5.5]

function notas(calificaciones) {
    let sumaNotas = 0; //suma para obtener el promedio
    let i = 0; //iterador
    let excelente = 0;
    let sobresaliente = 0;
    let aceptable = 0;
    let insuficiente = 0;
    let deficiente = 0;

    while (calificaciones[i] != undefined) {

        if (calificaciones[i] = 0) {
            deficiente++;
        } else if (calificaciones[i] = 4) {
            insuficiente++;
        } else if (calificaciones[i] = 6) {
            aceptable++;
        } else if (calificaciones[i] = 8) {
            sobresaliente++;
        } else if (calificaciones[i] = 9) {
            excelente++;
        }

        sumaNotas += calificaciones[i];
        i++;

    }

    let promedioNotas = sumaNotas / i;
    let resultado = [promedioNotas, deficiente, insuficiente, aceptable, sobresaliente, excelente];
    return resultado;
}

let rta = notas(calificaciones);
console.log(`La candidad de estudiantes en deficiente son: ${rta[1]}`);
console.log(`La candidad de estudiantes en insuficiente son: ${rta[2]}`);
console.log(`La candidad de estudiantes en aceptable son: ${rta[3]}`);
console.log(`La candidad de estudiantes en sobresaliente son: ${rta[4]}`);
console.log(`La candidad de estudiantes en excelente son: ${rta[5]}`);
console.log(`El promedio de notas del curso es: ${rta[0]}`);