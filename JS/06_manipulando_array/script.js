function Suma_indices() {
    let arreglo = [1, 2, 3, 4, 5, 6, 7];
    let suma = arreglo[arreglo.length - 1] + arreglo[arreglo.length - 2] + arreglo[0];
    alert("La suma de los valores es: " + suma);
}

function Producto_pares() {
    let arreglo = [2, 4, 6, 7, 10, 12];
    let producto = 1;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            producto *= arreglo[i];
        }
    }
    alert("El producto de los valores pares es: " + producto);
}