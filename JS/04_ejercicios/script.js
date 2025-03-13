console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    alert("Esto es una alerta");
    // Tu código aquí
    let ahora = parseInt(prompt("Ingrese año actual:"));
    let fecha_nac = parseInt(prompt("Ingrese año de nacimiento: "));
    resultado = ahora - fecha_nac;
    alert("Edad: " + resultado);

    
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
    // Tu código aquí
    let var1 = parseInt(promt("ingrese un numero: "));
    let var2 = var1;
    alert("El valor de var2 es el mismo que var1\n"+ "var1: " + var1 + "\nvar2:");
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
    
    alert( );
    
    // Tu código aquí

    let num1 = parseInt(prompt("Ingresa el primer numero: "));
    let num2 = parseInt(prompt("Ingresa el segundo numero: "));
    let num3 = parseInt(prompt("Ingresa el tercer numero: "));
    let operacion1 = num1 + num2 + num3
    let operacion2 = num1 - num3
    let operacion3 = num2 * num3
    let operacion4 = num1 / 120
    alert("Operacion1:" + operacion1 + "\nOperacion 2:" + operacion2 + "\nOperacion 3:" + operacion3 + "\nOperacion4:" + operacion4);

    

    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {

    // Tu código aquí
    let direccion = promopt("ingrese direccion:")
    let n_casa = parseInt(prompt("ingrese numero de casa"));
    let mensaje = "direccion: " + direccion + "\nNumero de casa: " + n_casa
    let cadena = direccion +" "+ n_casa;
    let longuitud = cadena.length;
    let antepenultimo 

    alert(mensaje + "\n" + "longuitud del mensaje :" + mensaje.length)
    }