function aceptarEdadTerminos() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let aceptaTerminos = confirm("¿Acepta los términos?");

    if (edad >= 18 && aceptaTerminos) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }
}

function calcularDescuento() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    let esEstudiante = confirm("¿Es estudiante?");

    if (edad >= 60 || esEstudiante) {
        alert("Descuento aplicado");
    } else {
        alert("No tienes descuento");
    }
}

function encenderMaquina() {
    let energiaSuficiente = confirm("¿La máquina tiene suficiente energía?");
    let interruptorEncendido = confirm("¿El interruptor está encendido?");

    if (energiaSuficiente && interruptorEncendido) {
        alert("Máquina encendida");
    } else {
        alert("No se puede encender la máquina");
    }
}

function verificarAcceso() {
    let bloqueado = confirm("¿El usuario está bloqueado?");
    let tieneCredenciales = confirm("¿El usuario tiene credenciales válidas?");

    if (bloqueado || !tieneCredenciales) {
        alert("Acceso denegado");
    } else {
        alert("Acceso permitido");
    }
}
