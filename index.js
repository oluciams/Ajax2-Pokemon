"use strict";

import{getMovies} from "./modules/apiRequest.js"



// const dataAsync = async () => {
//   const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=$b61364da3cf775b0c719a30ee4fe39b2&language=en-US`)
//   const data = await response.json()
//   return data
// }

//load data using promises
/*
window.addEventListener("load",async ()=> { 
    getMovies("popular")
    .then((data) => data.results.map((movie) => movieCard(movie)))  
    .then((data)=>data.results.forEach(movie => {
      movieCard(movie)    
    }))

    .catch(error=>console.warn(error))
})
*/

window.addEventListener("load",async ()=> { 
  try{
    const data = await getMovies("top_rated") 
      if (data.status_code && !data.success) {
      throw new Error(`OH NO ERROR try catch ${data.status_message}`)
      } 
    data.results.map((movie) => movieCard(movie))
  }
  catch (error){
    console.warn(error)
  }  
})

const root = document.getElementById('moviesSection');

/**
 * 
 * @param {object} movie movie object 
 */

const movieCard = ({ title, overview, poster_path, release_date }) => { 
const row = document.createElement('div');
row.innerHTML = `
  <div class="card mt-4" style="width: 18rem;">       
      <img class= "card-img-top moviePoster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movie_poster">  
    <div class="card-body">
      <h5 class="card-title">${title}</h5> 
      <p class="card-text">${overview}</p>
      <p class="card-text"><small class="text-muted">${release_date}</small></p> 
    </div> 
  </div>   
    `;
root.appendChild(row);
}; 






//TODO: 
/**
 crear un select
 el select tendra la opcion de popular o top_rated
 al seleccionar una u otra debe pintar las peliculas de la categoria que pertenezcan
 */