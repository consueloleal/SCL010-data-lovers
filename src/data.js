/* Manejo de data */
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


  // Ejemplo POKEMON, se calculaba altura y pesos

  // var hAverage, maxH, wAverage, maxW;

  // var heights = data.map(monster => parseFloat(monster["height"]));
  // var weights = data.map(monster => parseFloat(monster["weight"]));

  // hAverage = (heights.reduce(function(a, b){ return a + b; }) / data.length).toFixed(2);
  // wAverage = (weights.reduce(function(a, b){ return a + b; }) / data.length).toFixed(2);

  // maxH = Math.max(...heights);
  // maxW = Math.max(...weights);

  // return {Altura_Promedio: hAverage + " m", Peso_Promedio: wAverage + " kg", Altura_Máxima: maxH + " m", Peso_Máximo: maxW + " kg"};
};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
