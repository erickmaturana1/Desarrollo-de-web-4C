function _Contador() {
    let contador = 1;
    while (contador <= 5) {
        alert(contador);
        contador++;
    }
}

// Ejercicio de cuenta regresiva
function _Numero() {
    let contador = 10;
    let array = [];
    while (contador >= 1) {
        array.push(contador);
        contador--;
    }
    alert(`Los números son: ${array.join(" - ")}`);
}

// Ejercicio de números pares del 2 al 10
function _Pares() {
    let contador = 2;
    let array = [];
    while (contador <= 10) {
        array.push(contador);
        contador += 2;
    }
    alert(`Los números pares son: ${array.join(" - ")}`);
}

// Ejercicio de números impares del 1 al 9
function _Impares() {
    let contador = 1;
    let array = [];
    while (contador <= 9) {
        array.push(contador);
        contador += 2;
    }
    alert(`Los números impares son: ${array.join(" - ")}`);
}
