

//Primero creo el acceso a la data del proyecto (Visto en el archivo data rickandmorty.js)
const accessData = () => {
const rymData = RICKANDMORTY.results;
return rymData;
};

const resultsNode = document.getElementById("result");
//Mostrando todas las tarjetas de los personajes, con imagen, nombre, genero y especie
function ups() {
   const perData = accessData();
    for (i=0; i<perData.length; i++){
       document.getElementById("result").innerHTML +=`
       <div class="tarjetas">
       <img src="${perData[i].image}" alt="">
       <p>Nombre: ${perData[i].name}</p>
       <p>Género: ${perData[i].gender}</p>
       <p>Especie: ${perData[i].species}</p>
       </div>`;
   }
}
ups();

let filteredData, Data ; 


document.getElementById('filterGender').addEventListener("change", ()=>{
    filteredData = window.filterData(rymData, {gender: filterGender.value, species: filterSpecies.value});
    showFilterCharacter(filteredData);
    debugger;
    //debugger;
    //clean();
}); 
document.getElementById('filterSpecies').addEventListener("change",()=>{
    filteredData = window.filterData(rymData, {species: filterSpecies.value, gender: filterGender.value})
    console.log(filteredData);
  });
//se obtiene el id de el selector para luego aplicar un elemento de escucha  
document.getElementById('filterOrden').addEventListener("change",()=>{
    Data = window.sortData(filteredData, "name", filterOrden.value );
});

function clean(){
  while (resultsNode.firstChild) {
    resultsNode.removeChild(resultsNode.firstChild);
  }

function showFilterCharacter(data){
  debugger;
    //se crea un div para que contendra al personaje que actual
  data.forEach(function(character){
    const characterNode = document.createElement("div"); 
    characterNode.id =character.name;
    characterNode.className = "characterNode";
    debugger;

  result.innerHTML+='<div class="wrap">'
                              '<div class="card-wrap">'+
                                '<div class="card" style="width: 15rem;">'+ 
                                 '<section class="front">'+
                                    '<h5 class="card-title">' + character.name + '</h5>'+
                                  '</section>'+
                                  '<section class="back">'+
                                    '<div class="card-body">'+
                                      '<img id="image"src=" ${character[i].image} "></img>' +
                                      '<span class="card-span">Nombre: </span><em>'+ character.name +'</em>'+
                                      '<span class="card-span">Estado:</span><em>' + character.status + '</em>'+
                                      '<span class="card-span">Género: </span><em>' + character.gender+'</em>'+ 
                                      '<span class="card-span">Ultima locación: </span><em>' + character.location +'</em>'+
                                    '</div>' +
                                  '</section>'+ 
                              '</div>'

  //results.appendChild(characterNode);
  }); 
};

  /*while (rootStatNode.firstChild) {
    rootStatNode.removeChild(rootStatNode.firstChild);
  }*/

