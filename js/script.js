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
 * SNACK 2
 ***************************/
/**
 * Creare un array di oggetti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
 * Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// // Array of Objects
// const teams = [
//     {
//         name : 'Milan',
//         points : 0,
//         fouls : 0,
//     },
//     {
//         name : 'Inter',
//         points : 0,
//         fouls : 0,
//     },
//     {
//         name : 'Juventus',
//         points : 0,
//         fouls : 0,
//     },
//     {
//         name : 'Atalanta',
//         points : 0,
//         fouls : 0,
//     },
// ];
// // New Array
// let newTeams = [];

// for(let i = 0; i < teams.length; i++){
//     // Generate Values
//     teams[i].points = randomNum(0, 50);
//     teams[i].fouls = randomNum(0, 50);

//     // Destructuring
//     let {name, fouls} = teams[i];

//     // Populate NewArray
//     newTeams.push(
//         {
//             name,
//             fouls,
//         }
//     );
// }

// // Print New Array
// console.table(newTeams)

/***************************
 * SNACK 3
 ***************************/
/**
 * Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
inseriti dall'utente
 */

// Original Array
const students = ['Paolo', 'Marco', 'Giuseppe', 'Laura', 'Marta', 'Andrea']; 

let min = 0; // Start Index
let max = 0; // End Index

// Input Start Index
do{
    min = parseInt(prompt(`Enter a number between 0 and ${students.length - 1}`));
    if(isNaN(min)){
        alert('You have not entered a number');
    } else if(!(min >= 0 && min < students.length)){
        alert('Number out of range')
    }
} while(isNaN(min) || !(min >= 0 && min < students.length));

// Input End Index
do{
    max = parseInt(prompt(`Enter a number between ${min} and ${students.length - 1}`));
    if(isNaN(max)){
        alert('You have not entered a number');
    } else if(!(max >= min && max < students.length)){
        alert('Number out of range')
    }
} while(isNaN(max) || !(max >= min && max < students.length));

// Create New Array with filter
const newArray = arrayFromRange(students,min,max);

// Print in console
console.log(`Original array: ${students}`);
console.log(`New array: ${newArray}`);

/*************
 * FUNCTION
 *************/
/**
 * Return new array with element in range
 * @param {array} arr 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function arrayFromRange(arr, min, max){
    return arr.filter((element, index) => {
        return (index >= min && index <= max);
    });
}



// /************
//  * FUNCTIONS
//  ************/
// /**
//  * Returns random number in a range
//  * @param {number} min 
//  * @param {number} max 
//  * @returns 
//  */
// function randomNum(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
