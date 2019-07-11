global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


pdu.window = global;
pdu.assert = require("RICKANDMORTY").assert;
require("../src/data/rickandmorty/rickandmorty.js");
require("../src/data.js")
require("./data.spec.js");

const testPu = [
  {"id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  },
  {
   "id": 35,
   "name": "Bepisian",
   "status": "Alive",
   "species": "Alien",
   "type": "Bepisian",
   "gender": "unknown",
  },
];

const status = [{ "id": 1,
"name": "Rick Sanchez",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Male",
  }];

describe("filterData", () => {

  it('Debería ser una función', () => {
    assert.equal(typeof filterData, "function");
  });
  it('Debería devolver el objeto Human al seleccionar tipo "species" ', () => {
    assert.deepEqual(window.filterData(testPu, "species"), species)
  });
});

describe("sortData", () => {

  it('Debería ser una función', () => {
    assert.equal(typeof sortData, "function");
  });
  it('Debería devolver los objetos "Bepisian", "Rick Sanchez" (ordenados de la A a la Z)', () => {
    assert.deepEqual(window.sortData(testPu, "A-Z", "A-Z"),[
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        },
        {
         "id": 35,
         "name": "Bepisian",
         "status": "Alive",
         "species": "Alien",
         "type": "Bepisian",
         "gender": "unknown",
         
       },
       
    ])
  });
  it('Debería devolver los objetos "Rick Sanchez", "Bepisian" (ordenados de la Z a la A)', () => {
    assert.deepEqual(window.sortData(testPu, "Z-A", "Z-A"),[
      { "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      },
      {
       "id": 35,
       "name": "Bepisian",
       "status": "Alive",
       "species": "Alien",
       "type": "Bepisian",
       "gender": "unknown",
       },
       
    ])
  });