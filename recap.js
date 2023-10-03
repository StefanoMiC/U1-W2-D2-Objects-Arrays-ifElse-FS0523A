// TIPI DI DATI PRIMITIVI
// string - insieme di caratteri racchiusi da apici "" '' ``(backtick: alt + 96 del tastierino numerico)
// number - numeri senza apici
// boolean - true / false
// undefined - assenza di valore
// null - assenza di valore intenzionale
// ____________________________________
// symbol
// bigInt
// ____________________________________
// DATA TYPES STRUTTURALI
// object - raccoglitore di dati sotto forma di chiave-valore
// array - lista di elementi accessibili tramite la loro posizione
// function - un blocco di codice che potremo eseguire più volte

// RECAP

// VARIABILI

let myName = "Stefano";

{
  // questo let ha creato una nuova variabile col nome myName, ha sovrascritto l'esistenza della precedente
  let myName = "Riccardo";
  console.log("INTERNO", myName);
}

console.log("ESTERNO", myName);

let mySurname;
mySurname = "Miceli";

const role = "teacher";
// role = "student";

// COMPOSIZIONE DI STRINGHE CON VALORI DINAMICI
const message = "My name is: " + myName + " " + mySurname + ", and my role is: " + role;
console.log(message);

// template string - `${}` il dollaro con le graffe ci permette di INTERPOLARE valori dinamici, che verranno posizionati direttamente dentro la stringa.
// I ritorni di linea vengono mantenuti
const message2 = `My name is: ${myName} ${mySurname}, 
and my role is: ${role}`;
console.log(message2);

// operatori matematici
// + - * / %
console.log(3 + 3);
console.log(3 + "3"); // 33
// con l'operatore + bisogna stare attenti al tipo di valore altrimenti invece di 6 otteniamo 33
console.log(3 * "2"); // 6
console.log(3 * "Ciao"); // NaN
console.log(22 / 4); // 5.5
console.log(22 % 4); // 2 - il resto della divisione 22 / 4

// Operatori di comparazione
// === !== > >= < <=
console.log(12 % 2 === 0); // per vedere se il numero è pari
console.log(100 < 101); // false
console.log(3 >= 3); // true

// Operatori logici
// && AND - torna true quando tutte le condizioni sono vere, altrimenti sempre false
// || OR - torna true quando ALMENO una condizione è vera, torna false quando TUTTE sono false
// ! NOT - inverte un valore booleano al suo opposto
const eyeColor = "green";

console.log(role === "teacher" && myName === "Stefano" && eyeColor === "brown"); // true && true && false => false
console.log(
  role === "teacher" && myName === "Stefano" && (eyeColor === "brown" || eyeColor === "blue" || eyeColor === "green")
); // true && true && true => true

// TERNARY OPERATOR - condizione ? se true : se false

const isMyNameStefano = myName === "Stefano" ? "Sì" : "No";
console.log(isMyNameStefano);

const cartTotal = prompt("quanto hai speso?");
console.log(typeof cartTotal);

const shippingCosts = cartTotal >= 100 ? 0 : 25;

console.log(
  "Il carrello è di:",
  cartTotal + "€" + ", il costo di spedizione è:",
  shippingCosts > 0 ? shippingCosts : "gratis"
);

const childAge = 14;

const schoolToAttendTo = childAge >= 13 ? "High School" : childAge >= 10 ? "Middle School" : "Elementary";
console.log(schoolToAttendTo);
