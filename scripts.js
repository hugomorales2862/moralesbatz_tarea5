const formulario = document.querySelector('form')
const button = document.getElementById('buttonConsulta')
const tabla = document.querySelector('table')


// validaciones 

tabla.style.display = 'none'
const consultarPokemon = async (e) => {
    e.preventDefault();
    let nombrePokemon = formulario.pokemon.value;
    if(nombrePokemon == ''){
        alert("Debe ingregar el nombre del pokemon")
        return;
    }

const consultaAPI = async (e) => {
    const url = `consulta.php`
    const config = {
        method : 'GET'
    }

    try {
        // CONSULTA A LA API
        const respuesta = await fetch(url, config);   
        
        const data = await respuesta.text()

        alert(data)
         
       
    } catch (error) {
        alert(error)
    }
}



button.addEventListener('click', consultaAPI )