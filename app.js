// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo para almacenar los nombres de amigos

const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarLista();
}

// Función para recorrer el arreglo y actualizar la lista en el HTML
function actualizarLista() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que el array de amigos no esté vacío
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, añade al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el nombre sorteado en la lista "resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado} ha sido sorteado como tu amigo secreto 🎉</li>`;
}
