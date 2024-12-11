// 1) i tipi primitivi principali sono sono string, number, boolean, undefined , null e any in casi particolari

// 2)
const myName: string = 'Niccolò'
const myAge: number = 34
const myBoolean: boolean = true

// 3)
const greet = (name: string) => {
  return 'Ciao ' + name
}
console.log(greet('pino'))

// 4)
const sum = (a: number, b: number): number => {
  return a + b
}
console.log(sum(1, 2))

// 5)
const calcolaPrezzoConIVA = (prezzo: number): number => {
  const iva = 0.22
  return prezzo + prezzo * iva
}

// 6)
const concatenaECalcolaLunghezza = (a: string, b: string): number => {
  const concatenatedString = a + b
  return concatenatedString.length
}

const string1 = 'Ciao '
const string2 = 'Stefano!'
const lunghezzaTotale = concatenaECalcolaLunghezza(string1, string2)
console.log(lunghezzaTotale)

// 7) un type union permette alla variabile di avere più tipologie di valori
let variabile: string | number = 500 //oppure 'stefano'

// 8)
type SpecialType = string | number | null

let v1: SpecialType = 0 // oppure 'stefano, oppure null

// 9)
type GiornoDellaSettimana =
  | 'Lunedì'
  | 'Martedì'
  | 'Mercoledì'
  | 'Giovedì'
  | 'Venerdì'
  | 'Sabato'
  | 'Domenica'
// Esempio d'uso: const oggi: GiornoDellaSettimana = 'Martedì'; console.log(`Oggi è: ${oggi}`);

// 10)
const numbers: Array<number> = [1, 2, 3]
const numbers2: number[] = [1, 2, 3]

// 11)
const tuple1: [string, string, string, number, number] = [
  'pino',
  'pippo',
  'pluto',
  10,
  11,
]

// 12) type si usa principalmente per dati primitivi mentre interface si utilizza per costruire il modello di un oggetto

// 13)
interface Niccolò {
  firstname: string
  lastname: string
  age: number
}

// 14)
interface user {
  email: string
  telephone?: number
}

// 15)
type Studente = { nome: string; voto: number }

// 16)
interface Veicolo {
  marca: string
  modello: string
  anno: number
}
interface Auto extends Veicolo {
  porte: number
  carburante: string
}

// 17) 
const miaAuto: Auto = {
  marca: 'Toyota',
  modello: 'Corolla',
  anno: 2022,
  porte: 4,
  carburante: 'Benzina',
}

// 18) un generic è un tipo di dato passato come parametro per una interfaccia, il suo scopo è rendere più generica e riutilizzabile un'interfaccia

// 19) Si è possibile.

// 20)
interface ApiResponse<T> {
  status: number
  message: string
  data: T
}

// Esempio d'uso con un tipo specifico di dati:
interface Utente {
  id: number
  nome: string
  email: string
}

const rispostaUtente: ApiResponse<Utente> = {
  status: 200,
  message: 'Success',
  data: {
    id: 1,
    nome: 'Mario Rossi',
    email: 'mario.rossi@example.com',
  },
}

console.log(rispostaUtente)
