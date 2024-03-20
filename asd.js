
function asignarTextoElemento(palabraSalida) {
    let elementoHTML = document.querySelector('p');
    elementoHTML.innerHTML = palabraSalida;
    return;
}

function encriptar(){
    let palabraDeEntrada = document.getElementById('palabraAEncriptar').value;
    palabraSalida = palabraDeEntrada.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    asignarTextoElemento(palabraSalida);
}

function desencriptar(){
    let palabraDeEntrada = document.getElementById('palabraAEncriptar').value;
    palabraSalida = palabraDeEntrada.replaceAll("ufat","u").replaceAll("ober","o").replaceAll("ai","a").replaceAll("imes","i").replaceAll("enter","e");
    asignarTextoElemento(palabraSalida);
}
