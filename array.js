// ARRAY
// è una collezione (lista) di elementi possibilmente simili

// un array si crea usanto [] dentro una variabile
const students = ["Alessandro", "Samuele", "Luca", "Riccardo", "Caterina"]; // array di stringhe
const numbers = [5, 10, -10, 20.3]; // array di numeri
const booleans = [true, false, false, true];

// const mixed = [true, "Epicode", 50, undefined]; // NON FATELO MAI, meglio avere array omogenei nei tipi che contengono

const objects = [{ name: "Andrea" }, { name: "Alessandro" }, { name: "Fidan" }];
const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
  [0, 0]
];

// la posizione in un Array comincia da 0!
console.log(students);
console.log(students[0] + "!");
console.log(students[2]);

// possiamo chiedere all'array di dirci quanti elementi ha
console.log("LENGTH", students.length);
console.log("L'ULTIMO", students[students.length - 1]); // riusciamo a prendere SEMPRE l'ultimo elemento anche se l'array cambia nel tempo

console.log(numbers[2]); // terzo elemento di numbers
console.log(objects[2]); // accedo alla terza posizione, trovo un oggetto, a quell'oggetto accedo alla sua proprietà name
console.log(objects[2].name); // accedo alla terza posizione, trovo un oggetto, a quell'oggetto accedo alla sua proprietà name

// METODI DEGLI ARRAY - ci permettono di modificare un array esistente

// AGGIUNTA DI NUOVO ELEMENTO ALLA FINE DELL'ARRAY
students.push("Daniel");
students.push("Eliminami dalla fine");
// ELIMINARE L'ULTIMO ELEMENTO DELL'ARRAY
console.log(students);
students.pop();
console.log(students);

// AGGIUNTA DI NUOVO ELEMENTO ALL'INIZIO DELL'ARRAY
students.unshift("Cosmin");
students.unshift("Eliminami");
console.log(students);

//ELIMINARE IL PRIMO ELEMENTO DELL'ARRAY
console.log(students.shift());
console.log(students);

//PRENDERSI UNA PORZIONE DI UN ARRAY E CREARE UN NUOVO ARRAY CON QUESTI ELEMENTI
// slice richiede un'indice da dove iniziare e uno da dove terminare la selezione
// se l'indice di fine manca andrà a prelevare tutti i rimanenti
const newClonedArr = students.slice(); // prendo tutti gli elementi dell'array originario e li salvo in una variabile
const newSlicedArr = students.slice(2, 5); // prendo da indice 2 a 5 (5 escluso, quindi 4)
const allButFirst = students.slice(1); // tutti gli elementi a partire dal secondo (indice 1)
console.log(students);
console.log(newSlicedArr);
console.log(allButFirst);
