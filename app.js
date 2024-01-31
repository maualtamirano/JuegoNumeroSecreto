let numeroSecreto = 0;
let intentos = 1;
let listaNumerosGenerados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;    
return;
}
function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById(`verificarIntento`).value);

if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos == 1 ? "intento" : "intentos")}`);
    document.getElementById("reiniciar").removeAttribute(`disabled`)
} else{
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p", "El numero secreto es Menor")
    } else {
        asignarTextoElemento("p", "El numero secreto es Mayor")
    }
  intentos++;
  limpiarCaja();
} 
return;
}

function generarNumeroSecreto(){
let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

console.log(numeroGenerado);
console.log(listaNumerosGenerados);

if (listaNumerosGenerados.length == numeroMaximo){
    asignarTextoElemento("p", "Ya se usaron todos los numeros disponibles")
} else{
    if (listaNumerosGenerados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    } else {
    listaNumerosGenerados.push(numeroGenerado);
    return numeroGenerado;
} 
}



}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute(`disabled`, true)

 
    
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto" );
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function limpiarCaja(){
 document.querySelector("#verificarIntento").value = ``;
}

condicionesIniciales();