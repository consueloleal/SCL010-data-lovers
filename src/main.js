const resultsNode = document.getElementById("result");
const statsNode   = document.getElementById("stats");
//Mostrando todas las tarjetas de los personajes, con imagen, nombre, genero y especie
const rymData = RICKANDMORTY.results;
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
   characterStats = computeStats(rymData);
   showStatsCharacter(characterStats);
}
ups();

let filteredData;


//se obtiene el id de el selector para luego aplicar un elemento de escucha
document.getElementById('filterOrden').addEventListener("change",()=>{
    filteredData = filterData(rymData, {gender: filterGender.value, species: filterSpecies.value})
    rymStats     = computeStats(filteredData);

    clean();
    if (filterOrden.value !== "Normal")
      filteredData = sortData(filteredData, "name", filterOrden.value)
    showFilterCharacter(filteredData);
    characterStats = computeStats(filteredData);
    showStatsCharacter(characterStats);
});

document.getElementById('filterGender').addEventListener("change", ()=>{
    filteredData = filterData(rymData, {gender: filterGender.value, species: filterSpecies.value});
    rymStats     = computeStats(filteredData);

    clean();
    if (filterOrden.value !== "Normal")
      filteredData = sortData(filteredData, "name", filterOrden.value)
    showFilterCharacter(filteredData);
    characterStats = computeStats(filteredData);
    showStatsCharacter(characterStats);
});

document.getElementById('filterSpecies').addEventListener("change",()=>{
    filteredData = filterData(rymData, {gender: filterGender.value, species: filterSpecies.value})
    rymStats     = computeStats(filteredData);

    clean();
    if (filterOrden.value !== "Normal")
      filteredData = sortData(filteredData, "name", filterOrden.value)
    showFilterCharacter(filteredData);
    characterStats = computeStats(filteredData);
    showStatsCharacter(characterStats);
});

function clean(){
  while (resultsNode.firstChild) {
    resultsNode.removeChild(resultsNode.firstChild);
  }
  while (statsNode.firstChild) {
    statsNode.removeChild(statsNode.firstChild);
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

function showStatsCharacter(stats){
  for (var key in stats){
    const statNode = document.createElement("div");
    statNode.className = "statNode col-sm-3";
    statNode.innerHTML = "<span class='statLabel'>" + key.replace(new RegExp("_", 'g'), " ") + ":</span> " + stats[key];
    statsNode.appendChild(statNode);
  }
};