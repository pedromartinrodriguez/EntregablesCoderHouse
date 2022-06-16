// CALCULAR NOTA FINAL DE ALUMNOS INGRESADOS

// DEBE INCLUIR UN ITERADOR, UNA ESTRUCTURA CONDICIONAL

// Funcion que automatice el proceso

// Si el ususario elije mas de uno, ITERADOR para que el proceso se itere n cantidad de veces


alert("Calculador de nota final de alumnos ingresados");

const alumno1 = {
    nombre: prompt("Ingrese el nombre del primer alumno"),
    curso: prompt("Ingrese su curso"),
    nota: Number(prompt("Ingrese su nota final"))
}

const alumno2 = {
    nombre: prompt("Ingrese el nombre del segundo alumno"),
    curso: prompt("Ingrese su curso"),
    nota: Number(prompt("Ingrese su nota final"))
}

const alumno3 = {
    nombre: prompt("Ingrese el nombre del tercer alumno"),
    curso: prompt("Ingrese su curso"),
    nota: Number(prompt("Ingrese su nota final"))
}

const alumno4 = {
    nombre: prompt("Ingrese el nombre del cuarto alumno"),
    curso: prompt("Ingrese su curso"),
    nota: Number(prompt("Ingrese su nota final"))
}
const alumnos = [alumno1, alumno2, alumno3, alumno4];
const notasAlumnos = [alumno1.nota, alumno2.nota, alumno3.nota, alumno4.nota];

if ((alumno1.nota < 0 || alumno2.nota < 0 || alumno3.nota < 0 || alumno4.nota < 0) || alumno1.nota > 10 || alumno2.nota > 10 || alumno3.nota > 10 || alumno4.nota > 10) {

    alert("Recuerde que las notas deben ser estar entre el 0 y el 10")

} else {

    alert("Usted ingreso las notas correctamente")
    function promedio(nota1, nota2, nota3, nota4) {
        let notasSumadas = alumno1.nota + alumno2.nota + alumno3.nota + alumno4.nota;
        let resultadoPromedio = notasSumadas / 4;
        return resultadoPromedio;
    }

}

for (let i = 0; i < notasAlumnos.length; i++) {
    
    alert("Las notas ingresadas son: " + notasAlumnos[i]);
    
}

alert("La nota promedio es: " + promedio());