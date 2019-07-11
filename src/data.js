/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example;
*/

const rymData = RICKANDMORTY.results; 

const filterData = (data, condition) => {
  for (var key in condition) {
    
    if (condition[key] === "All")
      delete condition[key]
  }

  return data.filter(function(character) {
    for (var key in condition) {
      if (character[key] === undefined || !character[key].includes(condition[key]))
        return false;
    }
    return true;
  });
};

const sortData = (data, sortBy, sortOrder) => {
  
  let ordenaPersonaje = data;
  if (sortOrder == "a-z"){
    ordenaPersonaje.sort((a,b)=> {
      if (a[sortBy] < b[sortBy]) {return -1;}
      if (a[sortBy] > b[sortBy]) {return  1;}
      return 0;
    })
  }

  if (sortOrder == "z-a"){
    ordenaPersonaje.sort((a,b)=> {
      if (a[sortBy] > b[sortBy]) {return -1;}
      if (a[sortBy] < b[sortBy]) {return  1;}
      return 0;
    })
  }
  return ordenaPersonaje;
};

const computeStats = (data) => {
  
  // con esto se obtienen las especies y generos, lo cual podría servir para calcular
  // el porcentaje de cada tipo de acuerdo a lo que se está mostrando (ya sea si se filtra o no)
  var species = data.map(character => character["species"])
  var gender  = data.map(character => character["gender"])
};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;