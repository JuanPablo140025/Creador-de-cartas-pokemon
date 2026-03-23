document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    // VALIDACIÓN
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let ciudad = document.getElementById("ciudad").value;
    let pokemonNombre = document.getElementById("pokemonNombre").value;
    let tipo = document.getElementById("tipo").value;
    let imagen = document.getElementById("imagen").value;

    if(!nombre || !edad || !ciudad || !pokemonNombre || !tipo || !imagen){
        alert("Complete todos los campos");
        return;
    }

    // OBJETO ENTRENADOR
    let entrenador = {
        nombre: nombre,
        edad: Number(edad),
        ciudad: ciudad,
        presentarse: function(){
            return "Soy " + this.nombre + " de " + this.ciudad;
        }
    };

    // OBJETO POKEMON
    let pokemon = {
        nombre: pokemonNombre,
        tipo: tipo,
        imagen: imagen,
        atacar: function(){
            return this.nombre + " usa ataque tipo " + this.tipo;
        }
    };

    // RELACIÓN (BONUS PRO)
    entrenador.pokemon = pokemon;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="card">
            <h2>Entrenador</h2>
            <p><strong>Nombre:</strong> ${entrenador.nombre}</p>
            <p><strong>Edad:</strong> ${entrenador.edad}</p>
            <p><strong>Ciudad:</strong> ${entrenador.ciudad}</p>
            <p>${entrenador.presentarse()}</p>
            <p><strong>Compañero:</strong> ${entrenador.pokemon.nombre}</p>
        </div>

        <div class="card">
            <h2>Pokémon</h2>
            <img src="${pokemon.imagen}" alt="pokemon">
            <p><strong>Nombre:</strong> ${pokemon.nombre}</p>
            <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
            <p>${pokemon.atacar()}</p>
        </div>
    `;
});