/* Manejo de data */
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
  
  let sortCharacter = data;
  if (sortOrder == "a-z"){
    sortCharacter.sort((a,b)=> {
      if (a[sortBy] < b[sortBy]) {return -1;}
      if (a[sortBy] > b[sortBy]) {return  1;}
      return 0;
    })
  }

  if (sortOrder == "z-a"){
    sortCharacter.sort((a,b)=>{
      if (a[sortBy] > b[sortBy]) {return -1;}
      if (a[sortBy] < b[sortBy]) {return  1;}
      return 0;
    })
  }
  return sortCharacter;
};

//const computeStats = (data) => {
// con esto se obtienen las especies y generos, lo cual podría servir para calcular
// el porcentaje de cada tipo de acuerdo a lo que se está mostrando (ya sea si se filtra o no)
//};

window.filterData = filterData;
window.sortData = sortData;
//window.computeStats = computeStats;
