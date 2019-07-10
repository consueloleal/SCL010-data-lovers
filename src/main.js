const resultsNode = document.getElementById("result");
//Mostrando todas las tarjetas de los personajes, con imagen, nombre, genero y especie
function ups() {
    for (i=0; i<rymData.length; i++){
       document.getElementById("result").innerHTML +=`
       <div class="tarjetas">
       <img src="${rymData[i].image}" alt="">
       <p>Nombre: ${rymData[i].name}</p>
       <p>Género: ${rymData[i].gender}</p>
       <p>Especie: ${rymData[i].species}</p>
       </div>`;
   }
}
ups();

let filteredData, data; 

//se obtiene el id de el selector para luego aplicar un elemento de escucha  
document.getElementById('filterOrden').addEventListener("change",()=>{
    filteredData = window.filterData(rymData, {gender: filterGender.value, species: filterSpecies.value})
    rymStats     = window.computeStats(filteredData);
    
    clean();
    if (filterOrden.value !== "Normal")
      filteredData = sortData(filteredData, "name", filterOrden.value)
    showFilterCharacter(filteredData);
});

document.getElementById('filterGender').addEventListener("change", ()=>{
    filteredData = window.filterData(rymData, {gender: filterGender.value, species: filterSpecies.value});
    rymStats     = window.computeStats(filteredData);
    
    clean();
    if (filterOrden.value !== "Normal")
      filteredData = sortData(filteredData, "name", filterOrden.value)
    showFilterCharacter(filteredData);
}); 

document.getElementById('filterSpecies').addEventListener("change",()=>{
    filteredData = window.filterData(rymData, {gender: filterGender.value, species: filterSpecies.value})
    rymStats     = window.computeStats(filteredData);
    
    clean();
    if (filterOrden.value !== "Normal")
      filteredData = sortData(filteredData, "name", filterOrden.value)
    showFilterCharacter(filteredData);
});

function clean(){
  while (resultsNode.firstChild) {
    resultsNode.removeChild(resultsNode.firstChild);
  }
}

function showFilterCharacter(data){
  data.forEach(function(character){
    document.getElementById("result").innerHTML +=`
       <div class="tarjetas">
       <img src="${character.image}" alt="">
       <p>Nombre: ${character.name}</p>
       <p>Género: ${character.gender}</p>
       <p>Especie: ${character.species}</p>
       </div>`;
  }); 
};