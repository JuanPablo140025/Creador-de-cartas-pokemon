document.getElementById("formulario").addEventListener("submit", function(e){
    e.preventDefault();

    let entrenador = {
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        ciudad: document.getElementById("ciudad").value,
        presentarse: function(){
            return "Soy " + this.nombre + " de " + this.ciudad;
        }
    };

    let pokemon = {
        nombre: document.getElementById("pokemonNombre").value,
        tipo: document.getElementById("tipo").value,
        imagen: document.getElementById("imagen").value,
        atacar: function(){
            return this.nombre + " usa ataque tipo " + this.tipo;
        }
    };

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <div class="card">
            <h2>Entrenador</h2>
            <p><strong>Nombre:</strong> ${entrenador.nombre}</p>
            <p><strong>Edad:</strong> ${entrenador.edad}</p>
            <p><strong>Ciudad:</strong> ${entrenador.ciudad}</p>
            <p>${entrenador.presentarse()}</p>
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
