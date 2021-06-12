"use strict";

const pokeList = document.getElementById('pokes');
const button = document.getElementById('savePoke')
const pokeDetails = document.getElementById("pokeDetails")


const URL = 'https://pokeapi.co/api/v2/pokemon'

const getData = (ruta) => {
  fetch(`${URL}/${ruta}`)
    .then(response => response.json())
    .then(data => {     
      data.results.forEach(element => {
        pokeUI(element)
      });      
    })
}



function pokeUI({ name, url }) {
  const row = document.createElement('div');
  row.innerHTML = `
  <div class="card mt-4" style="width: 18rem;"> 
    <div class="card-body">
      <h5 class="card-title">${name}</h5>  
      <button class="details btn btn-primary" id=${url} >More details</button>
     

    </div>
  </div>
  `;
  pokeList.appendChild(row);
};

button.addEventListener('click', () => getData('?limit=100'))

pokeList.addEventListener('click', (e) => {
  if (e.target.matches('.details')) {
  const url = e.target.id
  getDetails(url)
  //console.log(url)
  }
})

const getDetails = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {   
    console.log(data.abilities)  
    //console.log(data.abilities[0].ability.name)   
    moreDetails(data)
    })
};
 

//<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//More details
//</button>

function moreDetails ({name, weight, height, abilities}){

  const row = document.createElement("div")
  row.innerHTML = `
  <div class="card mt-6" style="width: 18rem;">    
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Mi peso es ${weight}</p>
      <p class="card-text">Mi altura es ${height}</p>
      <p class="card-text">Mi principal habilidad es ${abilities[0].ability.name}</p>
      
      <button href="#" id="delete" class="btn btn-primary">Close</button>
    </div>
  </div>
  `
 pokeDetails.appendChild(row)
}

pokeDetails.addEventListener('click', (e) => {
  if (e.target.matches('#delete')) {
    //console.log(e.target.parentElement.parentElement)
    e.target.parentElement.parentElement.parentElement.remove()
  }
})


