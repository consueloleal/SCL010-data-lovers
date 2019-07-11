const resultsNode = document.getElementById("result");
//Mostrando todas las tarjetas de los personajes, con imagen, nombre, genero y especie
const rymData = window.RICKANDMORTY.results;
function ups() {
    for (let i=0; i<rymData.length;  i++){
       document.getElementById("result").innerHTML +=`
       <div class="tarjetas">
       <img src="${rymData[i].image}" alt="">
       <p>Nombre: ${rymData[i].name}</p>
       <p>Género: ${rymData[i].gender}</p>
       <p>Especie: ${rymData[i].species}</p>
       <p>Estado: ${rymData[i].status} </p>
       </div>`;
   }
}
ups();

let filteredData;


//se obtiene el id de el selector para luego aplicar un elemento de escucha  
document.getElementById('filterOrden').addEventListener("change",()=>{
    filteredData = window.filterData(rymData, {gender: window.filterGender.value, species: window.filterSpecies.value})
    //rymStats     = window.computeStats(filteredData);
    
    clean();
    if (window.filterOrden.value !== "Normal")
      filteredData = window.sortData(filteredData, "name", window.filterOrden.value)
    showFilterCharacter(filteredData);
});

document.getElementById('filterGender').addEventListener("change", ()=>{
    filteredData = window.filterData(rymData, {gender: window.filterGender.value, species: window.filterSpecies.value});
    //rymStats     = window.computeStats(filteredData);
    
    clean();
    if (window.filterOrden.value !== "Normal")
      filteredData = window.sortData(filteredData, "name", window.filterOrden.value)
    showFilterCharacter(filteredData);
}); 

document.getElementById('filterSpecies').addEventListener("change",()=>{
    filteredData = window.filterData(rymData, {gender: window.filterGender.value, species: window.filterSpecies.value})
    //rymStats     = window.computeStats(filteredData);
    
    clean();
    if (window.filterOrden.value !== "Normal")
      filteredData = window.sortData(filteredData, "name", window.filterOrden.value)
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
       <p>Estado: ${character.status} </p>
       </div>`;
  }); 
}