const consultaAPI = async (e) => {
    const url = `./consulta.php`
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