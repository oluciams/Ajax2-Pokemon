"use strict";

const pokeList = document.getElementById('pokes');
const button = document.getElementById('savePoke')
const pokeDetails = document.getElementById("pokeDetails")
const buttonModal = document.getElementById("buttonModal")
const titleModal= document.getElementById("titleModal")
const bodyModal = document.getElementById("bodyModal")


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
      <button class="details btn btn-success" id=${url} >More details</button>
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
  }
})

const getDetails = (url) => {
  fetch(url)
  .then(response => response.json())
  .then(data => {    
    moreDetails(data)
    })
};
 
function moreDetails ({name, weight, height, abilities, sprites}){
  titleModal.textContent=`${name}`
  bodyModal.innerHTML = `
  <div>
    <img src="${sprites.front_default}" class="img-fluid">  
  </div> 
    <p class="card-text">Mi habilidad principal es: ${abilities[0].ability.name}</p>  
    <p class="card-text">Mi peso es: ${weight}</p>
    <p class="card-text">Mi estatura es: ${height}</p>
  `
  buttonModal.click()  
}

// pokeDetails.addEventListener('click', (e) => {
//   if (e.target.matches('#delete')) {
//     //console.log(e.target.parentElement.parentElement)
//     e.target.parentElement.parentElement.parentElement.remove()
//   }
// })






