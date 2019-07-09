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



const sortData = (data, sortBy, sortOrder) => {};


const computeStats = (data) => {

};

window.filterData = filterData;
window.sortData = sortData;
window.computeStats = computeStats;
