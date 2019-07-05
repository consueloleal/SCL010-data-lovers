// Manejo del DOM

//Primero creo el acceso a la data del proyecto (Visto en el archivo data rickandmorty.js)
const rymdata = RICKANDMORTY.results;
console.log(rymdata);

//Manejo los datos de cada personaje, recorro la data y hago console.log para checar que recorre la data
for (let i = 0; i <rymdata.length; i++) {
console.log(rymdata[i].name);
console.log(rymdata[i].gender);
console.log(rymdata[i].species);
console.log(rymdata[i].image);

//Defino los elementos que mostrare en la tarjeta de cada personaje (haciendo uso del HTML dinamico)
let photo = document.createElement("div");
let photoName = document.createElement("h4");
/*let newNombre = document.createTextNode("Nombre: ");
photoName.appendChild(newNombre);
let divName = document.getElementById("div1");
document.body.insertBefore(photoName, divName);*/
let photoGender = document.createElement("h4");
let photoSpecies = document.createElement("h4");
let photoImage = document.createElement("img");

//Defino de donde obtengo el contenido para cada elemento de la data
photoclassName = "target";
photoImage.src = rymdata[i].image;
photoName.textContent = rymdata[i].name;
photoGender.textContent = rymdata[i].gender;
photoSpecies.textContent = rymdata[i].species;

//Recobro los elementos de la lista (data)/Valores mostrados por el div
photo.appendChild(photoImage);
photo.appendChild(photoName);
photo.appendChild(photoGender);
photo.appendChild(photoSpecies);

//Muestro el resultado obtenido en el HTML
document.getElementById("result").appendChild(photo).innerHTML;
//console.log("result");
}

//Para manejar los nomnbres y filtrarlos por A-Z
const filterOrden = document.getElementById("filterOrden");
console.log("filterOrden");
filterOrden.addEventListener("change", () => {
//alert("A-Z");
let nameAZ = resultOrden.options[resultOrden.selectedIndex].value;
console.log("nameAZ");
})
