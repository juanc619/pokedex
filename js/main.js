const listaPokemon = document.querySelector("#listaPokemon");
const botonesHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((response) => response.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }


    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="pokemon-imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-nombre">${poke.name}</h2>
            </div>
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        mostrarPokemon(data);
                    }
                }

            })
    }
}))





<ul class = "nav-list">
    <li class = "nav-item"><button class= "btn btn-header"id= "ver-todos">Ver todos</button></li>
    <li class = "nav-item"><button class= "btn btn-header normal"id= "ver-todos">normal</button></li>
    <li class = "nav-item"><button class= "btn btn-header fire"id= "fire">Fire</button></li>
    <li class = "nav-item"><button class= "btn btn-header grass"id= "grass">Grass</button></li>
    <li class = "nav-item"><button class= "btn btn-header electric"id= "electric">Electric</button></li>
    <li class = "nav-item"><button class= "btn btn-header ice"id= "ice">Ice</button></li>
    <li class = "nav-item"><button class= "btn btn-header fighting"id= "fighting">Fighting</button></li>
    <li class = "nav-item"><button class= "btn btn-header poison"id= "poison">Poison</button></li>
    <li class = "nav-item"><button class= "btn btn-header ground"id= "ground">Ground</button></li>
    <li class = "nav-item"><button class= "btn btn-header flying"id= "flying">Flying</button></li>
    <li class = "nav-item"><button class= "btn btn-header psychic"id= "psychic">Psychic</button></li>
    <li class = "nav-item"><button class= "btn btn-header bug"id= "bug">Bug</button></li>
    <li class = "nav-item"><button class= "btn btn-header rock"id= "rock">Rock</button></li>
    <li class = "nav-item"><button class= "btn btn-header ghost"id= "ghost">Ghost</button></li>
    <li class = "nav-item"><button class= "btn btn-header dark"id= "dark">Dark</button></li>
    <li class = "nav-item"><button class= "btn btn-header dragon"id= "dragon">Dragon</button></li>
    <li class = "nav-item"><button class= "btn btn-header steel"id= "steel">Steel</button></li>
    <li class = "nav-item"><button class= "btn btn-header fairy"id= "fairy">Fairy</button></li>
</ul>