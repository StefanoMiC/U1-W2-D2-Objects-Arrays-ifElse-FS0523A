// OGGETTI IN JS

// quando abbiamo l'esigenza di rappresentare con un gruppo di dati una singola entità utilizzeremo un data type strutturale: un oggetto
// per es. un edificio, una macchina, uno studente, un animale

// come si crea un oggetto?
// tramite la notazione letterale: {}

const myObj = {};
// questo è un blocco, un contesto di codice separato da quello globale esterno
{
  let random = "qualcosa a caso";
}

const valueForProperty = "height";
// questo è un oggetto
// per descrivere meglio un'entità possiamo usare coppie chiave-valore all'interno del {} separate da virgole
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  hasWebcam: true,
  "e-mail": "john.doe@gmail.com", // sarebbe preferibile email o eMail
  [valueForProperty]: 190, // proprietà generata dinamicamente grazie alle [], valuterà il valore contenuto nella variabile, e userà quel valore per creare la proprietà
  location: { state: "Italy", region: "FVG" },
  emptyObj: myObj
};

// person = null; // ERRORE - non si può fare, quindi abbiamo una certa sicurezza nel sapere che l'oggetto non verrà cambiato con qualcos'altro

console.log(person); // l'oggetto visto come:  {chiavi-valore}

// come si accede alle singole proprietà?

// dot notation .
const dynamicValue = "e-mail";

console.log("nome", person.firstName);
console.log("webcam?", person.hasWebcam);
console.log("età?", person.age);

// square brackets notation -
// permette di accedere a proprietà con caratteri speciali nel nome,
// o di valutare valori dinamici prima di usare il valore per accedere a proprietà dell'oggetto
console.log("cognome", person["lastName"]); // non ha molto senso, si poteva usare la dot notation
// console.log("e-mail?", person.e - mail); // si rompe
console.log("e-mail?", person["e-mail"]);

console.log("valore dinamico:", person.dynamicValue); // undefined
console.log("valore dinamico:", person[dynamicValue]); // "john.doe@gmail.com"

const semiValue = "e-";
console.log("valore dinamico:", person[semiValue + "mail"]); // "john.doe@gmail.com"

console.log("regione", person.location.region); // "FVG", abbiamo avuto accesso all'oggetto annidato in una proprietà dell'oggetto person

// delete è una parola chiave RISERVATA
delete person.emptyObj; // cancelliamo emptyObj da person
console.log(person);

// creo una proprietà a posteriori andando ad assegnare un valore, in questo modo la proprietà che prima non esisteva comincia ad esistere
person.hasDrivingLicense = true; // non esisteva prima, e si è creata assegnando un valore
person.hasWebcam = false; // esisteva prima e l'abbiamo modificata
console.log(person.hasDrivingLicense);

let a = 20;
let b = a; // la primitiva contenuta nella variabile a viene COPIATA, diventano di fatto due numeri diversi a sé stanti
b = b + 1;

console.log(a, b);
let c = a + b;

const objA = {
  name: "Stefano"
};

// const objB = objA; // !!!! non copiare mai un oggetto direttamente, sfrutta uno dei due metodi seguenti

// objB.name = "Giuseppe";
// console.log(objA === objB);

const objC = Object.assign({}, objA, person); // copia il primo livello degli oggetti forniti come fonte, le sotto referenze NON venivano CLONATE
const newLocation = Object.assign({}, person.location);

objC.name = "Riccardo";
objC.location = newLocation;
objC.location.region = "Lombardy";

delete objC.firstName;

// console.log(objA, objC);

const objD = structuredClone(person); // questo metodo clona tutte le referenze in ogni livello
objD.location.region = "Sicily";
console.log(person.location, objC.location, objD.location);
// console.log(objA, person, objC, objD);
