// 1) i tipi primitivi principali sono sono string, number, boolean, undefined , null e any in casi particolari
// 2)
var myName = 'Niccolò';
var myAge = 34;
var myBoolean = true;
// 3)
var greet = function (name) {
    return 'Ciao ' + name;
};
console.log(greet('pino'));
// 4)
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
// 5)
var calcolaPrezzoConIVA = function (prezzo) {
    var iva = 0.22;
    return prezzo + prezzo * iva;
};
// 6)
var concatenaECalcolaLunghezza = function (a, b) {
    var concatenatedString = a + b;
    return concatenatedString.length;
};
var string1 = 'Ciao ';
var string2 = 'Stefano!';
var lunghezzaTotale = concatenaECalcolaLunghezza(string1, string2);
console.log(lunghezzaTotale);
// 7) un type union permette alla variabile di avere più tipologie di valori
var variabile = 500; //oppure 'stefano'
var v1 = 0; // oppure 'stefano, oppure null
// Esempio d'uso: const oggi: GiornoDellaSettimana = 'Martedì'; console.log(`Oggi è: ${oggi}`);
// 10)
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11)
var tuple1 = [
    'pino',
    'pippo',
    'pluto',
    10,
    11,
];
// 17) 
var miaAuto = {
    marca: 'Toyota',
    modello: 'Corolla',
    anno: 2022,
    porte: 4,
    carburante: 'Benzina',
};
var rispostaUtente = {
    status: 200,
    message: 'Success',
    data: {
        id: 1,
        nome: 'Mario Rossi',
        email: 'mario.rossi@example.com',
    },
};
console.log(rispostaUtente);
