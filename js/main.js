function circulo(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('CIRCULO');
    figura.classList.toggle("circulo");
    alert ("Cambiando de figura a circulo")
}
function rectangulo(){
    let figura= document.querySelector("#figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('RECTANGULO');
    figura.classList.toggle("rectangulo");
    alert ("Cambiando de figura a rectangulo")
}

function degradado(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('DEGRADADO');
    figura.classList.toggle("degradado");
    alert ("Poniendo degradado en la figura")
}

function gif(){
    let figura= document.querySelector("#figura");
    let titulo= document.querySelector('#titulo');
    titulo.innerText=('GIF');
    figura.classList.toggle("gif");
    alert ("Colocando GIF")
}

function luna(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('LUNA');
    figura.classList.toggle("luna");
    alert ("Cambiando de figura a una luna")
}

function estrella(){
    let figura =document.getElementById("figura");

    figura.classList.toggle("estrella");
}

function triangulo(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('TRIANGULO');
    figura.classList.toggle("triangulo");
    alert ("Cambiando de figura a un triangulo")
}

function moveTop(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia arriba.");
    figura.classList.toggle("top");
}

function moveBottom(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia abajo.");
    figura.classList.toggle("Bottom");
}

function moveLeft(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia la izquierda.");
    figura.classList.toggle("Left");
}

function moveRight(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia la derecha.");
    figura.classList.toggle("Right");
}

function diagonal(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById('titulo');
    titulo.innerText=('DIAGONAL');
    figura.classList.toggle("diagonal");
    alert ("Girando figura")
}

function panelLateral(){
    let panel =document.getElementById('panel-lateral');
    panel.classList.toggle('active');
}

function panelSuperior(){
    let panel =document.getElementById('panel-superior');
    panel.classList.toggle('active');
}

function inicio2(){
    let inicio= document.getElementById('inicio');
    inicio.classList.toggle('inicio2');

}

function ingresar(){
    let figura= document.getElementById('figura');
    figura.classList.toggle("ingresar");
    $val1=prompt("Ingrese un color en English:");
    var val1=val1;
    figura.style.background= $val1;
    alert ("Se cambia el color de la figura")
}

