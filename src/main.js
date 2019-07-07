// Manejo del DOM

//Primero creo el acceso a la data del proyecto (Visto en el archivo data rickandmorty.js)
const accessData = () => {
const rymData = RICKANDMORTY.results;
return rymData;
};

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

/*Para manejar el DOM y poder filtrar por nombre A-Z
const selectOrden = document.getElementById("filterOrden");
console.log(selectOrden);
selectOrden.addEventListener("change", () =>{
    const filterOrdenAZ = perData.filter(function(name){
        return name.perData;}
    );
    document.getElementById("result").innerHTML(name.perData);
    console.log(filterOrdenAZ);
});
*/



