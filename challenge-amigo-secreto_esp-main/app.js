// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
"use strict";

const inputAmigo = document.getElementById("input-amigo"),
botonAgregar = document.getElementById("btn-agregar"),
botonSortear = document.getElementById("btn-sortear"),
listaAmigos = document.getElementById("lista-amigos"),
listaSorteado = document.getElementById("lista-resultado");

const amigos = [];

const validarInput = (textoInput) => textoInput && textoInput.trim().length > 0;

const agregarAmigo = () => {
const nombre = inputAmigo.value;
if (!validarInput(nombre)) alert("Ingrese un nombre valido.");
else {
    listaAmigos.innerText += `${nombre}\n`;
    amigos.push(nombre);
    inputAmigo.value = "";
}
};

const sortearAmigo = () => {
if (amigos.length == 0) {
    alert("No hay amigos.");
    return;
}
  const aleatorio = Math.floor(Math.random() * amigos.length);
listaSorteado.innerText = `El amigo secreto es: ${amigos[aleatorio]}`;
};