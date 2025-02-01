# Amigo Secreto

## Descripción
Este es un proyecto web interactivo para realizar un sorteo de "Amigo Secreto". Permite a los usuarios ingresar los nombres de los participantes y luego generar aleatoriamente las parejas de intercambio de regalos.

## Tecnologías Utilizadas
- **HTML**: Estructura de la página web.
- **CSS**: Estilizado y diseño responsivo.
- **JavaScript**: Lógica para agregar nombres y realizar el sorteo.

## Características
- Interfaz sencilla y fácil de usar.
- Permite añadir nombres a la lista de participantes.
- Realiza un sorteo aleatorio de "Amigo Secreto".
- Muestra los resultados en pantalla.

## Estructura de Archivos
```
AmigoSecreto/
│── index.html      # Archivo principal HTML
│── style.css       # Estilos de la página
│── app.js          # Lógica del sorteo
│── assets/         # Carpeta con imágenes y íconos
```

## Código Fuente

### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
    rel="stylesheet"
    />
    <title>Amigo Secreto</title>
</head>

<body>
    <main class="main-content">
    <header class="header-banner">
        <h1 class="main-title">Amigo Secreto</h1>
        <img
        src="assets/amigo-secreto.png"
        alt="Imagen representativa de amigo secreto"
        />
    </header>

    <section class="input-section">
        <h2 class="section-title">Digite el nombre de sus amigos</h2>
        <div class="input-wrapper">
        <input
            type="text"
            id="input-amigo"
            class="input-name"
            placeholder="Escribe un nombre"
            autocomplete="off"
        />
        <button class="button-add" id="btn-agregar" onclick="agregarAmigo()">
            Añadir
        </button>
        </div>

        <ul
        id="lista-amigos"
        class="name-list"
        aria-labelledby="lista-amigos"
        role="list"
        ></ul>
        <ul id="lista-resultado" class="result-list" aria-live="polite"></ul>

        <div class="button-container">
        <button
            class="button-draw"
            id="btn-sortear"
            onclick="sortearAmigo()"
            aria-label="Sortear amigo secreto"
        >
            <img
            src="assets/play_circle_outline.png"
            alt="Ícono para sortear"
            />
            Sortear amigo
        </button>
        </div>
    </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>
```

### app.js
```javascript
"use strict";

const inputAmigo = document.getElementById("input-amigo"),
  botonAgregar = document.getElementById("btn-agregar"),
  botonSortear = document.getElementById("btn-sortear"),
  listaAmigos = document.getElementById("lista-amigos"),
  listaSorteado = document.getElementById("lista-resultado");

const amigos = new Set();

const validarInput = (textoInput) => textoInput && textoInput.trim().length > 0;

const agregarAmigo = () => {
  const nombre = inputAmigo.value.trim();
  if (!validarInput(nombre)) {
    alert("Ingrese un nombre válido.");
    return;
  }

  if (amigos.has(nombre)) {
    alert("Ese nombre ya ha sido agregado.");
    return;
  }

  amigos.add(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  listaAmigos.appendChild(li);

  inputAmigo.value = "";
};

const sortearAmigo = () => {
  if (amigos.size < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  const amigosArray = Array.from(amigos);
  const aleatorio = Math.floor(Math.random() * amigosArray.length);
  listaSorteado.innerText = `El amigo secreto es: ${amigosArray[aleatorio]}`;
};
```

### style.css
```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.button-draw:hover {
    background-color: var(--color-button-hover);
}
```

## Instalación y Uso
1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en un navegador web.
3. Ingresa los nombres de los participantes.
4. Presiona el botón "Sortear amigo" para realizar el sorteo.

## Contribución
Si deseas mejorar este proyecto, puedes hacer un fork del repositorio, realizar tus cambios y enviar un pull request.

## Autor
Proyecto desarrollado por Cristian Escamilla.

