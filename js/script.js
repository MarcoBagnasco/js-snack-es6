/***************************
 * SNACK 1
 ***************************/
/**
 * Creare un array di oggetti.
 * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 * Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
 */

// // Bikes Objects
// const bike1 = {
//     name : 'Bianchi',
//     weight : 10,
// };
// const bike2 = {
//     name : 'Norco',
//     weight : 6,
// };
// const bike3 = {
//     name : 'Graziella',
//     weight : 8,
// };

// // Array of Objects
// const bikes = [
//     bike1,
//     bike2,
//     bike3,
// ];

// // Variable for lightest bike
// let [lightBike] = bikes;

// for(let i = 1; i < bikes.length; i++){
//     // Set lightBike
//     if(bikes[i].weight < lightBike.weight){
//         lightBike = bikes[i];
//     }
// }

// // Assign lightBike property to variables
// const {name, weight} = lightBike;

// // Print with Template Literal
// console.log(`La bici più leggera è la ${name}, che pesa ${weight}kg!`);


/***************************
 * SNACK 
 ***************************/
/**
 * Creare un array di oggetti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
 * Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// Array of Objects
const teams = [
    {
        name : 'Milan',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Inter',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Juventus',
        points : 0,
        fouls : 0,
    },
    {
        name : 'Atalanta',
        points : 0,
        fouls : 0,
    },
];
// New Array
let newTeams = [];

for(let i = 0; i < teams.length; i++){
    // Generate Values
    teams[i].points = randomNum(0, 50);
    teams[i].fouls = randomNum(0, 50);

    // Destructuring
    let {name, fouls} = teams[i];

    // Populate NewArray
    newTeams.push(
        {
            name,
            fouls,
        }
    );
}

// Print New Array
console.table(newTeams)

/************
 * FUNCTIONS
 ************/
/**
 * Returns random number in a range
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}