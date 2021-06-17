const apiKey = "b61364da3cf775b0c719a30ee4fe39b2"
const URL = "https://api.themoviedb.org/3/movie"
const URL_COMPLEMENT = `?api_key=${apiKey}&language=en-US`


// Inicio código utilizando Promesas con módulos
/**
 * 
 * @param {string} ruta 
 * @returns 
 */

// export const getMovies = (ruta) => {
//     return fetch(`${URL}/${ruta}${URL_COMPLEMENT}`)
//             .then(response=>response.json())
//             .then(data=>{
        
//         if(data.status_code && !data.success){
//             throw new Error(`OH NO ${data.status_message}`)
//         }
//         return data
//     })
//     .catch(err=>console.warn("err", err))
// }

// Fin código utilizando Promesas con módulos

//  Inicio código utilizando ES6 async / await
/**
 * 
 * @param {string} ruta 
 * @returns data
 */

  export const getMovies = async (ruta) => {
      const response = await fetch(`${URL}/${ruta}${URL_COMPLEMENT}`)
      const data = await response.json()
      return data
  }

//  Fin código utilizando ES6 async / await



