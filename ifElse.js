// Con IF-ELSE determiniamo la direzione che prenderà il programma in base ad una condizione
// sarà sempre O una O L'ALTRA direzione, in maniera esclusiva.

/* if (condizione da verificare) {
    
    codice da eseguire se verificata

} else if (condizione alternativa alla prima, se la prima non si è verificata){
    
    codice da eseguire se si verifica la seconda condizione
    
} else {
    
    codice da eseguire se NON verificate le condizioni precedenti
}
*/

// in NESSUN CASO il blocco if e quello else si eseguiranno assieme, sarà sempre O uno O L'ALTRO!

let total = 40;
const myName = "Stefano";

// giochiamo un po' con gli if... facciamo eseguire diversi console log in determinate condizioni che creiamo

if (total >= 50) {
  console.log("Se sei qui significa che total è maggiore o uguale a 50");
} else if (total >= 40) {
  console.log("non era 50 ma è maggiore o uguale a 40");
} else {
  console.log("il tuo valore è sicuramente inferiore a 40");
}

if (total === 40 && myName === "Stefano") {
  console.log("dai Stefano che ci sei quasi, potresti fare di più");
}

if (myName !== "Stefano") {
  console.log("Non sei sicuramente Stefano");
}
console.log("PRE", total);

if (myName === "Stefano") {
  total = 0;
}
console.log("POST", total);

// ______________________________________________________
// in questo esempio la variabile schoolToAttendTo si modificherà O in un modo O in un altro a seconda della condizione che si verifica
const childAge = 14;

let schoolToAttendTo = ""; // la creiamo dapprima vuota

if (childAge >= 13) {
  // con il valore di childAge a 14 il programma entrerà qua dentro
  schoolToAttendTo = "High School"; // ed assegnerà High School come nuovo valore a schoolToAttendTo
} else if (childAge >= 10) {
  schoolToAttendTo = "Middle School";
} else {
  schoolToAttendTo = "Elementary";
}

// questa operazione è meglio eseguita da un ternario che andrà già a posizionare un valore al momento della creazione della variabile
// const schoolToAttendTo = childAge >= 13 ? "High School" : childAge >= 10 ? "Middle School" : "Elementary";
