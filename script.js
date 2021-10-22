const apiKey = "api_key=f3cb710ccf9761e78278185874899538";
const baseUrl = "https://api.themoviedb.org/3"
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey
const imagenUrl = 'https://image.tmdb.org/t/p/w1280'



const obtenerDatos = async (url) => {
    const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey
    const datosObtenidosApi = await fetch(apiUrl);    
    const peliculas = await datosObtenidosApi.json()    
    const {results} = peliculas;
    
    return results
}

//obtenerDatos()

const obtenerPeli = async () => {
    /*const datosObtenidosApi = await fetch(url);
    const peliculas = await datosObtenidosApi.json()
    const data = peliculas.results;*/

    let data = await obtenerDatos()
    console.log(data)
    
    data.forEach(data => {
        //imagen slider
        const imagenSlider = imagenUrl + data.backdrop_path

        const div = document.getElementById("slider")
        div.innerHTML += `<div class="swiper-slide"><img src="${imagenSlider}"></div>`
        //inicio tarjetas

        const titulo = data.title;
        const imagen = imagenUrl + data.poster_path
        const descripcion = data.overview;
        const calificacion = data.vote_average;

        const contenedor = document.getElementById("contenedor")
        contenedor.innerHTML += `<div class="card movie" style="width: 18rem;">
        <img class="card-img-top" src="${imagen}" alt="Card image cap">
        <div class="card-body tarjeta">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text overview">${descripcion}</p>
          <a href="#" class="btn btn-primary">${calificacion}</a>
        </div>
      </div>`     

       
    });

    /*<div class="card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>*/
}
document.addEventListener('DOMContentLoaded', obtenerPeli);


//BUSQUEDA DE PALABRAS COINCIDENTES

let boton = document.getElementById("btnBuscar")
boton.addEventListener("click", async () => {
    buscarPelicula()
})

const buscarPelicula = async() => {
    let texto = document.getElementById("search").value
    let datos = await obtenerDatos ()

    
    let buscar = datos.filter(datos => datos.title.toLowerCase() === texto.toLowerCase())
    
    

    contenedor.innerHTML = ""

    buscar.forEach(data => {
       
        //inicio tarjetas

        const titulo = data.title;
        const imagen = imagenUrl + data.poster_path
        const descripcion = data.overview;
        const calificacion = data.vote_average;

        const contenedor = document.getElementById("contenedor")
        contenedor.innerHTML += `<div class="card movie" style="width: 18rem;">
        <img class="card-img-top" src="${imagen}" alt="Card image cap">
        <div class="card-body tarjeta">
          <h5 class="card-title">${titulo}</h5>
          <p class="card-text overview">${descripcion}</p>
          <a href="#" class="btn btn-primary">${calificacion}</a>
        </div>
      </div>`     

       
    });

    
}


//CONSTRUCCION MAS VALORADAS Y MENOS VALORADAS





var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

