// Función para comprobar si el número es par o impar
function comprobarPar() {
    let num = prompt(("Ingrese numero: "));
    if (num % 2 == 0) {
        alert("El número es par.");
    } else {
        alert ("El número es impar.");
    }
}

// Función para calcular el Índice de Masa Corporal (IMC)
function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultadoIMC = document.getElementById("resultadoIMC");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoIMC.innerText = "Por favor, ingrese valores válidos.";
    } else {
        var imc = peso / (altura * altura);
        resultadoIMC.innerText = "Tu IMC es: " + imc.toFixed(2);
    }
}

// Función para calcular el promedio de las notas
function calcularPromedio() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var resultadoNotas = document.getElementById("resultadoNotas");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || 
        nota1 < 1 || nota1 > 7 || nota2 < 1 || nota2 > 7 || nota3 < 1 || nota3 > 7) {
        resultadoNotas.innerText = "Por favor, ingrese notas válidas entre 1 y 7.";
    } else {
        var promedio = (nota1 + nota2 + nota3) / 3;
        resultadoNotas.innerText = "El promedio de las notas es: " + promedio.toFixed(2);
    }
}
