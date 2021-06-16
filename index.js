"use strict";

import{getData} from "./modules/apiRequest.js"

window.addEventListener("load", ()=> {
  getData("popular")
  .then((data) => data.results.map((movie) => movieCard(movie)))  
  // .then((data)=>data.results.forEach(movie => {
  //   movieCard(movie)    
  // }))
  .catch(error=>console.warn(error))
})


const root = document.getElementById('moviesSection');


const movieCard = ({ title, overview, poster_path, release_date }) => { 
const row = document.createElement('div');
row.innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4"> 
          <img class= "moviePoster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movie_poster">
        </div> 
        <div class="col-md-8">
          <div class="card-body">
          <h5 class="card-title">${title}</h5> 
          <p class="card-text">${overview}</p>
          <p class="card-text"><small class="text-muted">${release_date}</small></p> 
        </div> 
      </div> 
    </div>
  </div>
`;
root.appendChild(row);
}; 






